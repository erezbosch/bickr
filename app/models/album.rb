class Album < ActiveRecord::Base
  include Taggable

  validates :creator, :title, presence: :true
  validates :cover_photo, inclusion: { in: :photos, allow_blank: true }

  belongs_to :creator, class_name: 'User', foreign_key: :creator_id
  belongs_to :cover_photo, class_name: 'Photo', foreign_key: :cover_photo_id
  has_many :photos
end
