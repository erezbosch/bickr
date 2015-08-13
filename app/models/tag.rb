class Tag < ActiveRecord::Base
  validates :label, presence: true, uniqueness: true
  has_many :taggings
  has_many :tagged_things, through: :taggings, source: :taggable
end
