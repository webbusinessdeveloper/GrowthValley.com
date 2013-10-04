class CoursesController < ApplicationController
  # GET /courses
  # GET /courses.json
  def index
    @courses = current_user.courses

    respond_to do |format|
      format.html # index.html.erb
    end
  end

  # GET /courses/1
  # GET /courses/1.json
  def show
    @course = current_user.courses.find_by_id(params[:id])

    respond_to do |format|
      format.html # show.html.erb
    end
  end

  # GET /courses/new
  # GET /courses/new.json
  def new
    @course = Course.new
    @course.sections.build

    respond_to do |format|
      format.html # new.html.erb
    end
  end

  # GET /courses/1/edit
  def edit
    @course = Course.find(params[:id])
    @course.sections.build
  end

  # POST /courses
  # POST /courses.json
  def create
    @course = Course.new(params[:course])

    respond_to do |format|
      if @course.save
        current_user.courses << @course
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
    @course = current_user.courses.find_by_id(params[:id])

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
    @course = current_user.courses.find_by_id(params[:id])
    @course.destroy

    respond_to do |format|
      format.html { redirect_to courses_url }
    end
  end

  def publish_unpublish
    course = current_user.courses.find_by_id(params[:id])

    if course.present?
      if Course.published_courses(current_user).count <= ENV['FREE_USER_MAX_FREE_COURSES_COUNT'].to_i
        if course.togglePublish == true
          render json: { status: 'success', data: course.is_published }
        else
          render json: { status: 'error', errorCode: '400', data: 'Error! Each section must have a test...' }
        end
      else
        render json: { status: 'error', errorCode: '400', data: "Error! Free user can only publish a maximum of #{ENV['FREE_USER_MAX_FREE_COURSES_COUNT']} courses..." }
      end
    else
      render json: { status: 'error', errorCode: '404', data: 'Course not found!' }
    end
  end
end
