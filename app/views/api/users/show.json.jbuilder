json.partial! 'user', user: @user, follows_hash: @follows_hash
json.photos @user.photos do |photo|
  json.(photo, *photo.column_names)
end
