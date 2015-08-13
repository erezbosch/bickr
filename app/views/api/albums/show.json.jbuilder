json.(@album, *Album.column_names)
json.photos @album.photos do |photo|
  json.(photo, *Photo.column_names)
  json.uploader_email @album.creator.email
end
json.creator_email @album.creator.email
