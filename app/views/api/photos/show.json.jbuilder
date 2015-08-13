json.partial! 'photo', photo: @photo
json.album_title @photo.album.title if @photo.album
