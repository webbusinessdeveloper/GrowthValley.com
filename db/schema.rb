# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20140128144105) do

  create_table "active_admin_comments", :force => true do |t|
    t.string   "resource_id",   :null => false
    t.string   "resource_type", :null => false
    t.integer  "author_id"
    t.string   "author_type"
    t.text     "body"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
    t.string   "namespace"
  end

  add_index "active_admin_comments", ["author_type", "author_id"], :name => "index_active_admin_comments_on_author_type_and_author_id"
  add_index "active_admin_comments", ["namespace"], :name => "index_active_admin_comments_on_namespace"
  add_index "active_admin_comments", ["resource_type", "resource_id"], :name => "index_admin_notes_on_resource_type_and_resource_id"

  create_table "admin_users", :force => true do |t|
    t.string   "email",                  :default => "", :null => false
    t.string   "encrypted_password",     :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0,  :null => false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
  end

  add_index "admin_users", ["email"], :name => "index_admin_users_on_email", :unique => true
  add_index "admin_users", ["reset_password_token"], :name => "index_admin_users_on_reset_password_token", :unique => true

  create_table "blog_posts", :force => true do |t|
    t.string   "title"
    t.text     "content"
    t.string   "url"
    t.integer  "user_id"
    t.datetime "published_at"
    t.boolean  "published"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

  add_index "blog_posts", ["id"], :name => "index_blog_posts_on_id", :unique => true
  add_index "blog_posts", ["published_at"], :name => "index_blog_posts_on_published_at"
  add_index "blog_posts", ["user_id"], :name => "index_blog_posts_on_user_id"

  create_table "blog_taggings", :force => true do |t|
    t.integer "post_id"
    t.integer "tag_id"
  end

  add_index "blog_taggings", ["post_id"], :name => "index_blog_taggings_on_post_id"
  add_index "blog_taggings", ["tag_id"], :name => "index_blog_taggings_on_tag_id"

  create_table "blog_tags", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "blog_tags", ["name"], :name => "index_blog_tags_on_name"

  create_table "blog_users", :force => true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at",                         :null => false
    t.datetime "updated_at",                         :null => false
    t.boolean  "admin",           :default => false
  end

  create_table "bundles", :force => true do |t|
    t.string   "name"
    t.float    "price"
    t.string   "bundle_pic"
    t.datetime "created_at",                    :null => false
    t.datetime "updated_at",                    :null => false
    t.boolean  "active",     :default => false
    t.boolean  "available",  :default => false
  end

  create_table "bundles_courses", :id => false, :force => true do |t|
    t.integer "course_id"
    t.integer "bundle_id"
  end

  create_table "bundles_users", :id => false, :force => true do |t|
    t.integer "bundle_id"
    t.integer "user_id"
  end

  create_table "charges", :force => true do |t|
    t.integer  "user_id"
    t.string   "stripe_token"
    t.integer  "amount"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

  create_table "ckeditor_assets", :force => true do |t|
    t.string   "data_file_name",                  :null => false
    t.string   "data_content_type"
    t.integer  "data_file_size"
    t.integer  "assetable_id"
    t.string   "assetable_type",    :limit => 30
    t.string   "type",              :limit => 30
    t.integer  "width"
    t.integer  "height"
    t.datetime "created_at",                      :null => false
    t.datetime "updated_at",                      :null => false
  end

  add_index "ckeditor_assets", ["assetable_type", "assetable_id"], :name => "idx_ckeditor_assetable"
  add_index "ckeditor_assets", ["assetable_type", "type", "assetable_id"], :name => "idx_ckeditor_assetable_type"

  create_table "courses", :force => true do |t|
    t.string   "title"
    t.string   "course_cover_pic"
    t.text     "description"
    t.string   "content_type",         :default => "both"
    t.integer  "sections_count",       :default => 1
    t.boolean  "is_published",         :default => false
    t.string   "status"
    t.boolean  "is_paid",              :default => false
    t.integer  "price",                :default => 0
    t.datetime "created_at",                               :null => false
    t.datetime "updated_at",                               :null => false
    t.string   "slug"
    t.integer  "subject_id"
    t.hstore   "classroom_properties"
    t.boolean  "classroom_enabled",    :default => false
  end

  create_table "courses_subjects", :id => false, :force => true do |t|
    t.integer "course_id"
    t.integer "subject_id"
  end

  create_table "exam_questions", :force => true do |t|
    t.text     "question"
    t.integer  "exam_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "exams", :force => true do |t|
    t.text     "title"
    t.integer  "course_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "learners_exams", :force => true do |t|
    t.integer  "user_id"
    t.integer  "exam_id"
    t.integer  "exam_question_id"
    t.integer  "course_id"
    t.text     "user_input"
    t.datetime "created_at",       :null => false
    t.datetime "updated_at",       :null => false
    t.integer  "score"
  end

  create_table "learners_quizzes", :force => true do |t|
    t.integer  "user_id"
    t.integer  "quiz_id"
    t.integer  "section_id"
    t.integer  "user_input"
    t.boolean  "correct_answer"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
  end

  create_table "learners_teachers", :id => false, :force => true do |t|
    t.integer "learner_id"
    t.integer "teacher_id"
  end

  create_table "notifications", :force => true do |t|
    t.string   "notification_for", :limit => 100
    t.string   "module",           :limit => 25
    t.integer  "module_id"
    t.string   "action",           :limit => 50
    t.integer  "user_id"
    t.text     "message"
    t.datetime "created_at",                      :null => false
    t.datetime "updated_at",                      :null => false
  end

  create_table "premium_courses", :force => true do |t|
    t.integer  "user_id"
    t.integer  "amount"
    t.integer  "course_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "quizzes", :force => true do |t|
    t.text     "question"
    t.string   "option1"
    t.string   "option2"
    t.string   "option3"
    t.string   "option4"
    t.integer  "correct_answer"
    t.integer  "section_id"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
  end

  create_table "ratings", :force => true do |t|
    t.string   "ip_address"
    t.integer  "rate"
    t.integer  "course_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "recommended_courses", :force => true do |t|
    t.integer  "user_id"
    t.integer  "exam_id"
    t.integer  "course_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "sections", :force => true do |t|
    t.string   "title"
    t.text     "description"
    t.string   "attachment"
    t.boolean  "unlocked",    :default => false
    t.integer  "course_id"
    t.datetime "created_at",                     :null => false
    t.datetime "updated_at",                     :null => false
    t.string   "slug"
  end

  create_table "subjects", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.string   "slug"
  end

  create_table "subjects_users", :id => false, :force => true do |t|
    t.integer "user_id"
    t.integer "subject_id"
  end

  create_table "subscriptions", :force => true do |t|
    t.integer  "course_id"
    t.integer  "user_id"
    t.string   "user_type"
    t.integer  "current_section"
    t.boolean  "complete",            :default => false
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
    t.string   "progress"
    t.integer  "progress_percentage", :default => 0
    t.integer  "score"
    t.string   "final_result"
  end

  create_table "users", :force => true do |t|
    t.string   "full_name"
    t.text     "description"
    t.string   "type"
    t.boolean  "sex"
    t.string   "subscription_type",      :default => "free"
    t.string   "profile_pic"
    t.string   "email",                  :default => "",     :null => false
    t.string   "encrypted_password",     :default => "",     :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0,      :null => false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.datetime "created_at",                                 :null => false
    t.datetime "updated_at",                                 :null => false
    t.string   "provider"
    t.string   "uid"
    t.date     "date_of_birth"
  end

  add_index "users", ["confirmation_token"], :name => "index_users_on_confirmation_token", :unique => true
  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

end
