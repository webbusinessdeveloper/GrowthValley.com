class AddActiveAvailableToBundle < ActiveRecord::Migration
  def change
    add_column :bundles , :active , :boolean , :default=>false
    add_column :bundles , :available , :boolean, :default=>false
  end
end
