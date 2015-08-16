json.(photo, *Photo.column_names)
json.uploader_email photo.uploader.email
json.like likes_hash['Photo'][photo.id]
json.numLikes photo.num_likes
