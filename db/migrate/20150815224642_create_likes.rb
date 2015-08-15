class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :user_id, foreign_key: true
      t.references :likable, polymorphic: true, index: true

      t.timestamps null: false
    end
    add_index :likes, [:user_id, :likable_id, :likable_type], unique: true
  end
end
