json.partial! 'photo', photo: @photo
json.album_title @photo.album ? @photo.album.title : nil 
