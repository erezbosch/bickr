json.partial! 'user', user: @user, follows_hash: @follows_hash
json.photos @user.photos
