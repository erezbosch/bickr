json.(comment, *Comment.column_names)
user = comment.user
json.user_email user.email
json.user_avatar_url user.avatar_url
json.comments comment.comments.order(:id) do |comment|
  json.partial! 'api/comments/comment', comment: comment
end
