json.array! @users.order(:id) do |user|
  json.partial! 'user', user: user, follows_hash: @follows_hash
end
