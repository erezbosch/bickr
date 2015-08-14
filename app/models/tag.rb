class Tag < ActiveRecord::Base
  validates :label, presence: true, uniqueness: true
  has_many :taggings, dependent: :destroy
  has_many(:tagged_photos,
    through: :taggings,
    source: :taggable,
    source_type: 'Photo'
  )
  has_many(:tagged_albums,
    through: :taggings,
    source: :taggable,
    source_type: 'Album'
  )
end
