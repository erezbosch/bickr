json.(user, :id, :email, :avatar_url)
json.follow follows_hash[user.id]
