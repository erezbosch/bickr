class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.integer :creator_id, null: false, index: true
      t.string :title, null: false
      t.string :description
      t.integer :cover_photo_id, index: true

      t.timestamps null: false
    end
    add_foreign_key :photos, :albums, column: :album_id
    add_foreign_key :albums, :photos, column: :cover_photo_id
    add_foreign_key :albums, :users, column: :creator_id
  end
end
