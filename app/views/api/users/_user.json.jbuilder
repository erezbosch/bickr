json.(user, :id, :email)
json.follow follows_hash[user.id]
