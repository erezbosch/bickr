class Tagging < ActiveRecord::Base
  validates :tag, :taggable, presence: :true
  belongs_to :taggable, polymorphic: true
  belongs_to :tag
end
