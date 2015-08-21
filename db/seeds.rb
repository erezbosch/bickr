# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

avatars = Array.new(10)

users = Array.new(10) do |i| # give them avatar_url
  User.create!(
    email: Faker::Internet.safe_email,
    password: 'password',
    avatar_url: avatars[i],
  )
end
guest = User.create!(
  email: 'guest@example.com',
  password: 'password',
  avatar_url: '',
)

albums = [] # 10 x { title: , description: }
photos = [] # 100 x { image_url: , public_id: , title: , caption: [leave this off for some] }
tags = [] # 25 x { label: }
albums.map! { |album| users.sample.albums.create!()}

photos.map! do |photo|
  user = users.sample
  unless [true, false, false].sample || user.albums.blank?
    photo = user.photos.create!(photo)
  else
    photo = user.albums.sample.photos.create!(photo.merge({ uploader: user }))
  end
end
