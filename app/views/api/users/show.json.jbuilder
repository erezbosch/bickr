json.partial! 'user', user: @user, follows_hash: @follows_hash
if @show_photos
  json.photos @user.photos.order(id: :desc) do |photo|
    json.(photo, *Photo.column_names)
    json.uploader_email @user.email
  end
end
if @show_albums
  json.albums @user.albums.order(id: :desc) do |album|
    json.(album, *Album.column_names)
    json.creator_email @user.email
  end
end
