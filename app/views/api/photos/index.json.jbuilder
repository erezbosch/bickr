json.array! @photos do |photo|
  json.partial! 'photo', photo: photo, likes_hash: @likes_hash
end
