json.(user, :id, :email)
json.followed current_user.follows?(user)
