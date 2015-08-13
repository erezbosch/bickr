json.partial! 'user', user: @user, follows_hash: @follows_hash
json.photos(
  @user.photos.includes(:uploader).order("photos.created_at DESC"),
  partial: 'api/photos/photo',
  as: :photo
)
