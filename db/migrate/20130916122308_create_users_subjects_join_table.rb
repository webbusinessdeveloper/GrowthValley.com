class CreateUsersSubjectsJoinTable < ActiveRecord::Migration
  def change
    create_table 'subjects_users', :id => false do |t|
      t.references :user, :null => false
      t.references :subject, :null => false
    end
  end
end