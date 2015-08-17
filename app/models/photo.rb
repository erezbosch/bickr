class Photo < ActiveRecord::Base
  include Taggable
  include Likable

  validates :uploader, :title, :image_url, :public_id, presence: true

  belongs_to :uploader, foreign_key: :uploader_id, class_name: 'User'
  belongs_to :album
  has_one :covering_album, foreign_key: :cover_photo_id, class_name: 'Album'

  def self.recommendations
    sql = <<-SQL
      SELECT
        photos.*
      FROM
        photos
      JOIN
        likes
      ON
        likes.likable_id = photos.id
      WHERE
        likes.likable_type = 'Photo'
      GROUP BY
        photos.id
      ORDER BY
        COUNT(likes.id) DESC
      LIMIT
        20
    SQL

    find_by_sql(sql)
  end
end
