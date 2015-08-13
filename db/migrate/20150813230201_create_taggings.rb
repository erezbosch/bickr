class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :tag_id, foreign_key: true
      t.references :taggable, polymorphic: true, index: true

      t.timestamps null: false
    end
    add_index :tags, :label, unique: true
    add_index :taggings, [:tag_id, :taggable_id, :taggable_type], unique: true
  end
end
