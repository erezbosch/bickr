json.(@album, *Album.column_names)
json.photos @album.photos
json.creator_email @album.creator.email
