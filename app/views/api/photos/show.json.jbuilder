json.partial! 'photo', photo: @photo
json.album_title @photo.album ? @photo.album.title : nil
json.tags @photo.tags.order(:id)
like = @photo.likes.find_by(user_id: current_user.id)
json.like { json.(like, :id) } if like
json.numLikes @photo.num_likes
