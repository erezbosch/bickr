class Photo < ActiveRecord::Base
  validates :uploader, :title, :image_url, :public_id, presence: true
  belongs_to :uploader, foreign_key: :uploader_id, class_name: 'User'

  def self.recommendations
    where(recommended: true).order("created_at DESC")
  end
end
