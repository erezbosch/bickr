class Photo < ActiveRecord::Base
  include Taggable
  include Likable

  validates :uploader, :title, :image_url, :public_id, presence: true

  belongs_to :uploader, foreign_key: :uploader_id, class_name: 'User'
  belongs_to :album
  has_one :covering_album, foreign_key: :cover_photo_id, class_name: 'Album'

  def self.recommendations
    where(recommended: true).order(id: :desc).includes(:uploader)
  end
end
