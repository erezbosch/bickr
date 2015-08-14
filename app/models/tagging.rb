class Tagging < ActiveRecord::Base
  validates :tag, :taggable, presence: :true
  validates :tag, uniqueness: { scope: [:taggable_id, :taggable_type] }
  belongs_to :taggable, polymorphic: true
  belongs_to :tag
end
