class ChangeColNameFromImageToImageUrlAndAddPublicIdColumn < ActiveRecord::Migration
  def change
    rename_column :photos, :image, :image_url
    add_column :photos, :public_id, :string
    change_column :photos, :public_id, :string, null: false
  end
end
