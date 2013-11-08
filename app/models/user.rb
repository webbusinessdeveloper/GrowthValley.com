class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable, :confirmable, :omniauthable,
  :omniauth_providers => [:facebook]

  # Setup accessible (or protected) attributes for your model

  attr_accessible :email, :password, :password_confirmation, :remember_me, :full_name, :description, :type, :age, :sex, :subscription_type, 
  :profile_pic, :subject_ids, :course_ids, :provider, :uid, :confirmed_at

  has_and_belongs_to_many :subjects
  before_destroy { subjects.clear }
  accepts_nested_attributes_for :subjects, :allow_destroy => true, :limit => 3

  has_and_belongs_to_many :courses
  before_destroy { courses.clear }
  accepts_nested_attributes_for :courses, :allow_destroy => true

  has_many :charges, dependent: :destroy
  accepts_nested_attributes_for :charges, :allow_destroy => true

  validates_presence_of :full_name
  validates_presence_of :type, on: :create
  # validates :subjects, :presence => true, :length => { :maximum => 3 }, :if => "type.present?", on: :create

  mount_uploader :profile_pic, ProfilePicUploader

  USER_ROLES = [
    ['Im here to learn', 'Learner'],
    ['Im here to teach a skill', 'Teacher']
  ]

  def self.find_for_oauth(auth, extra, signed_in_resource=nil)
    user = User.where(:provider => auth.provider, :uid => auth.uid).first
    unless user
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
      user.save
    end
    user
  end
end
