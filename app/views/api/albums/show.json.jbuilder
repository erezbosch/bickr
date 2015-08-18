email = @album.creator.email
json.(@album, *Album.column_names)
json.photos @album.photos.order(id: :desc) do |photo|
  json.(photo, *Photo.column_names)
  json.uploader_email email
  json.like @likes_hash['Photo'][photo.id]
  json.numLikes photo.num_likes
end
json.creator_email email
json.tags @album.tags.order(:id)
json.like @likes_hash['Album'][@album.id]
json.numLikes @album.num_likes
