email = @album.creator.email
json.(@album, *Album.column_names)
json.photos @album.photos.order(id: :desc) do |photo|
  json.(photo, *Photo.column_names)
  json.uploader_email email
end
json.creator_email email
json.tags @album.tags.order(:id)
like = @album.likes.find_by(user_id: current_user.id)
json.like { json.(like, :id) } if like
json.numLikes @album.num_likes
