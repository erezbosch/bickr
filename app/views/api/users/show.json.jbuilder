json.partial! 'user', user: @user, follows_hash: @follows_hash
email = @user.email
if @show_photos
  json.photos @user.photos.order(id: :desc) do |photo|
    json.(photo, *Photo.column_names)
    json.uploader_email email
    json.like @likes_hash['Photo'][photo.id]
    json.numLikes photo.num_likes
  end
end
if @show_albums
  json.albums @user.albums.order(id: :desc) do |album|
    json.(album, *Album.column_names)
    json.like @likes_hash['Album'][album.id]
    json.numLikes album.num_likes
    json.photos album.photos.order(id: :desc) do |photo|
      json.(photo, *Photo.column_names)
      json.uploader_email email
    end
    json.creator_email email
  end
end
