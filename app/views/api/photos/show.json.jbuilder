json.partial! 'photo', photo: @photo
json.album_title @photo.album ? @photo.album.title : nil
json.tags @photo.tags.order(:id)
