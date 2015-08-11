class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer :uploader_id, null: false, index: true
      t.integer :album_id, index: true
      t.string :title, null: false
      t.string :caption
      t.string :image, null: false
      t.boolean :recommended, default: false

      t.timestamps null: false
    end

    add_foreign_key :photos, :users, column: :uploader_id
  end
end
