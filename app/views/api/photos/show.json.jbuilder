like = @photo.likes.find_by(user_id: current_user.id)
likes_hash = { 'Photo' => { @photo.id => like } }
json.partial! 'photo', photo: @photo, likes_hash: likes_hash
json.album_title @photo.album ? @photo.album.title : nil
json.tags @photo.tags.order(:id)
