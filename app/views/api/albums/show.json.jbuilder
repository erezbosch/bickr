json.(@album, *Album.column_names)
email = @album.creator.email
json.photos @album.photos do |photo|
  json.(photo, *Photo.column_names)
  json.uploader_email email
end
json.creator_email email
json.tags @album.tags.order(:id)
