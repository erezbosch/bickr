json.(user, :id, :email)
json.following current_user.follows?(user)
