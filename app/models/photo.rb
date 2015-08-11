class Photo < ActiveRecord::Base
  validates :uploader, :title, :image, presence: true
  belongs_to :uploader, foreign_key: :uploader_id, class_name: 'User'
end
