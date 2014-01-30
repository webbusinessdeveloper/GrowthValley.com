module Pl
  class Classroom < ActiveRecord::Base
    attr_accessible :title, :description, :privacy

    belongs_to :course
    has_many :users_classrooms, class_name: "Pl::UsersClassroom", dependent: :destroy
    has_many :users, through: :users_classrooms, class_name: "User", uniq: true
    has_many :lessons, dependent: :destroy

    validates :course_id, presence: true

    state_machine :state, initial: :requested do
      event :approve do
        transition :requested => :active
      end
      event :decline do
        transition :requested => :not_accepted
      end
      event :archive do
        transition [:requested, :active] => :archived
      end
    end

    state_machine :pay_state, initial: :inactive, namespace: 'payment' do
      event :request_payment do
        transition :inactive => :requested, if: :active?
      end

      event :approve_payment do
        transition :requested => :approved, if: :active?
      end
    end

    def self.add_classroom(classroom_data)
      @course = Course.find(classroom_data["course_id"])
      if Pl::Classroom.where(course_id: @course.id).map(&:user_ids).include?(classroom_data["learner_id"])
        return nil
      end

      @classroom = Pl::Classroom.new do |c|
        c.title = @course.title
        c.course_id = classroom_data["course_id"]
        c.privacy = false
      end

      @classroom.users << User.find(classroom_data["learner_id"])
      @classroom.users << @course.teacher

      if @classroom.save
        @classroom.id
      else
        return nil
      end
    end

    def progress
      @progress = (lessons.completed.count / lessons.count).round * 100
    end

    def teacher
      @teacher ||= users.where(type: "Teacher").first
    end

    def learner
      @learner ||= users.where(type: "Learner").first
    end

    def price_per_lesson
      course.classroom_properties['cost_per_lesson'].to_i
    end

    def max_number_lessons
      course.classroom_properties['max_number_lessons'].to_i
    end
  end
end