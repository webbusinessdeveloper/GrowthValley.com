class CoursesController < ApplicationController
  skip_before_filter :authenticate_user!, only: [:rate_course, :index]

  # GET /courses
  # GET /courses.json
  def index
    @current_menu = "courses"
    @show_top_menu = true
    if params[:order].present?
		if params[:order] == "latest"
			sort_order = "courses.created_at desc"
		elsif params[:order] == "name"
			sort_order = "courses.title asc"
		elsif params[:order] == "rating"
			sort_order = "courses.created_at asc"
		else
			sort_order = "courses.title asc"
		end
	else
		sort_order = "courses.title asc"
    end
    
    if params[:search].present?
		if !current_user
		  @courses = Course.all_published.text_search(params).order(sort_order)
		elsif current_user.type == 'Teacher'
		  @courses = Course.all_published.text_search(params).order(sort_order)
		elsif current_user.type == 'Learner'
		  @courses = Course.all_published_courses_for_subjects(current_user.subjects).text_search(params).order(sort_order)
		end
	else
		if !current_user
		  @courses = Course.all_published.order(sort_order)
		elsif current_user.type == 'Teacher'
		  @courses = Course.all_published.order(sort_order)
		elsif current_user.type == 'Learner'
		  @courses = Course.all_published_courses_for_subjects(current_user.subjects).order(sort_order)
		end
	end
	
    respond_to do |format|
      format.html # index.html.erb
    end
  end
  
  def my_courses
    @courses = current_user.courses

    respond_to do |format|
      format.html # index.html.erb
    end
  end

  # GET /courses/1
  # GET /courses/1.json
  def show
    @course = current_user.courses.find_by_slug(params[:id])

    respond_to do |format|
      format.html # show.html.erb
    end
  end

  # GET /courses/new
  # GET /courses/new.json
  def new
    @course = current_user.courses.build
    @course.sections.build

    respond_to do |format|
      format.html # new.html.erb
    end
  end

  # GET /courses/1/edit
  def edit
    @course = current_user.courses.find(params[:id])
    @course.sections.build
  end

  # POST /courses
  # POST /courses.json
  def create
    @course = current_user.courses.build(params[:course])

    respond_to do |format|
      if @course.save
        current_user.courses << @course
        Subscription.where(course_id: @course.id, user_id: current_user.id).first.update_attribute(:user_type, 'Teacher')
        session[:course_id] = @course.id
        format.html { redirect_to course_steps_path }
      else
        format.html { render action: "new" }
      end
    end
  end

  # PUT /courses/1
  # PUT /courses/1.json
  def update
    @course = current_user.courses.find_by_slug(params[:id])

    respond_to do |format|
      if @course.update_attributes(params[:course])
        session[:course_id] = @course.id
        format.html { redirect_to course_steps_path }
      else
        format.html { render action: "edit" }
      end
    end
  end

  # DELETE /courses/1
  # DELETE /courses/1.json
  def destroy
    @course = current_user.courses.find_by_slug(params[:id])
    @course.destroy

    respond_to do |format|
      format.html { redirect_to courses_url }
    end
  end

  def publish_unpublish
    course = current_user.courses.find_by_id(params[:id])

    if course.present?
      if course.is_published == true || current_user.allowed_to_publish?(course.id)
        if course.togglePublish == true
		  add_activity_stream('COURSE', course, 'published') if course.is_published == true
          render json: { status: 'success', data: course.is_published }
        else
          render json: { status: 'error', errorCode: '400', data: 'Error! Each section must have a test and course must have an exam...' }
        end
      else
        if current_user.subscription_type == 'free'
          render json: { status: 'error', errorCode: '400', data: "Error! Free user can only publish a maximum of #{ENV['FREE_USER_MAX_FREE_COURSES_COUNT']} courses..." }
        elsif current_user.subscription_type == 'paid' && course.is_paid == false
          render json: { status: 'error', errorCode: '400', data: "Error! Premium user can only publish a maximum of #{ENV['PAID_USER_MAX_FREE_COURSES_COUNT']} free courses..." }
        elsif current_user.subscription_type == 'paid' && course.is_paid == true
          render json: { status: 'error', errorCode: '400', data: "Error! Premium user can only publish a maximum of #{ENV['PAID_USER_MAX_PAID_COURSES_COUNT']} paid courses..." }
        end
      end
    else
      render json: { status: 'error', errorCode: '404', data: 'Course not found!' }
    end
  end

  def rate_course
    if params[:course_id].present?
      course = Course.find_by_id(params[:course_id])

      if params[:rate]
        rating = course.ratings.where(ip_address: request.remote_ip).first_or_initialize
        rating.rate = params[:rate]

        if rating.save
          render json: { status: 'success', data: 'Rating submitted successfully!' }
        else
          render json: { status: 'error', data: 'Sorry! Rating could not be saved, please try again later...' }
        end
      else
        render json: { status: 'error', data: 'Error! We did not receive your rating...' }
      end
    else
      render json: { status: 'error', data: 'Course not found!' }
    end
  end
end
