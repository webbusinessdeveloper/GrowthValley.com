class LearnersQuizzesController < ApplicationController
  def new
    if params[:section].present? and params[:course].present?
		@course = Course.find_by_slug(params[:course])
		@section = Section.find_by_slug(params[:section])
		if @section.present? && current_user.present?
			answered_quizzes = @section.learners_quizzes.where(user_id: current_user.id).collect(&:quiz_id)
		end

		if answered_quizzes.present?
		  @quiz_question = @section.quizzes.where('id not in (?)', answered_quizzes).first
		else
		  @quiz_question = @section.quizzes.first
		end
		
		if @quiz_question.present?
		@quiz_answer = current_user.learners_quizzes.build(quiz_id: @quiz_question.id, section_id: @section.id)
		else
		redirect_to my_courses_courses_path(), :notice => "You cannot take a test again"
		end
    end
  end

  def create
    if params[:learners_quiz][:section_id].present?
      @section = Section.find_by_id(params[:learners_quiz][:section_id])
      @course = @section.course
      if @section.present? && current_user.present?
        answered_quizzes = @section.learners_quizzes.where(user_id: current_user.id).collect(&:quiz_id)
      end
    end

    if answered_quizzes.present?
      @quiz_question = @section.quizzes.where('id not in (?)', answered_quizzes).first
    else
      @quiz_question = @section.quizzes.first
    end

    if @quiz_question.correct_answer == params[:learners_quiz][:user_input].to_i
      @quiz_answer = current_user.learners_quizzes.build(quiz_id: params[:learners_quiz][:quiz_id], section_id: params[:learners_quiz][:section_id], user_input: params[:learners_quiz][:user_input], correct_answer: true)
    else
      @quiz_answer = current_user.learners_quizzes.build(quiz_id: params[:learners_quiz][:quiz_id], section_id: params[:learners_quiz][:section_id], user_input: params[:learners_quiz][:user_input], correct_answer: false)
    end

    if @quiz_answer.save
      if @section.quizzes.where('id not in (?)', answered_quizzes).length == 1
        course = Course.find_by_id(@section.course_id).sections.where(unlocked: false)
        if course.present?
          course.first.update_attribute(:unlocked, true)
          redirect_to learner_path(@section.course), notice: 'Next section unlocked!'
          return
        else
          redirect_to learner_path(@section.course)
          return
        end
      else
        redirect_to take_test_learners_path(section: @section, course: @course), notice: 'Answer submitted successfully!'
      end
    else
      render :new
    end
  end
end