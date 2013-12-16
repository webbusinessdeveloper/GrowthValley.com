class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable, :confirmable, :omniauthable,
  :omniauth_providers => [:facebook]

  # Setup accessible (or protected) attributes for your model

  attr_accessible :email, :password, :password_confirmation, :remember_me, :full_name, :description, :type, :date_of_birth, :sex, :subscription_type, 
  :profile_pic, :subject_ids, :course_ids, :provider, :uid, :confirmed_at

  has_and_belongs_to_many :bundles

  has_and_belongs_to_many :subjects
  before_destroy { subjects.clear }
  accepts_nested_attributes_for :subjects, :allow_destroy => true, :limit => 3

  has_many :subscriptions, dependent: :destroy
  accepts_nested_attributes_for :subscriptions, :allow_destroy => true

  has_many :courses, through: :subscriptions
  accepts_nested_attributes_for :courses, :allow_destroy => true

  has_many :charges, dependent: :destroy
  accepts_nested_attributes_for :charges, :allow_destroy => true

  has_many :premium_courses, dependent: :destroy
  accepts_nested_attributes_for :premium_courses, :allow_destroy => true

  has_many :learners_quizzes, dependent: :destroy
  accepts_nested_attributes_for :learners_quizzes, :allow_destroy => true

  validates_presence_of :full_name
  validates_presence_of :type, on: :create
  # validates :subjects, :presence => true, :length => { :maximum => 3 }, :if => "type.present?", on: :create

  has_many :learners_exams, dependent: :destroy
  accepts_nested_attributes_for :learners_exams, :allow_destroy => true

  has_many :recommended_courses, dependent: :destroy
  accepts_nested_attributes_for :recommended_courses, :allow_destroy => true

  mount_uploader :profile_pic, ProfilePicUploader

  USER_ROLES = [
    ['Im here to learn', 'Learner'],
    ['Im here to teach a skill', 'Teacher']
  ]

  def self.create_from_oauth(auth, extra, signed_in_resource=nil)
    type = extra['type']
    provider = auth.provider
    uid = auth.uid
    email = auth.info.email
    fullname = auth.extra.raw_info.name
    user = User.new(full_name:fullname,
                         provider:provider,
                         uid:uid,
                         email:email,
                         password:Devise.friendly_token[0,20],
                         confirmed_at:DateTime.now,
                         type: type
                         )
    if user.save
      return user
    end
  end
end
