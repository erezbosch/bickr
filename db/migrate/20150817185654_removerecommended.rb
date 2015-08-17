class Removerecommended < ActiveRecord::Migration
  def change
    remove_column :photos, :recommended
  end
end
