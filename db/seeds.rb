# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = Array.new(10) do
  User.create!({ email: Faker::Internet.safe_email, password: 'password' })
end

albums = [] # 20 x { title: , description: }
albums.map! { |album| }
photos = [] # 100 x { image_url: , public_id: , title: , description: }
tags = [] # 25 x { label: }

photos.map! do |photo|
  user = users.sample
  unless [true, true, false].sample || user.albums.blank?
    photo = user.photos.create!(photo)
  else
    photo = user.albums.sample.photos.create!(photo)
  end
end


users << User.create!({email: 'guest@example.com', password: 'password' })
