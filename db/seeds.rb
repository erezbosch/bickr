# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


albums = [] # 10 x { title: , description: }
photos = [] # 100 x { image_url: , public_id: , title: , caption: [leave this off for some] }
tags = [] # 25 x { label: }
avatars = [] # 8 x cloudinary image urls
comment_hashes = Array.new(500) {} # some faker things

users = Array.new(10) do |i| # give them avatar_url
  User.create!(
    email: Faker::Internet.safe_email,
    password: 'password',
    avatar_url: i < 8 ? avatars[i] : nil
  )
end
guest = User.create!(
  email: 'guest@example.com',
  password: 'password',
  avatar_url: '' # make it something
)
users << guest

albums.map! { |album_hash| users.sample.albums.create(album_hash) }

photos.map! do |photo_hash|
  user = users.sample
  unless [true, false, false].sample || user.albums.blank?
    user.photos.create(photo_hash)
  else
    user.albums.sample.photos.create(photo_hash.merge({ uploader: user }))
  end
end

comments = []
comment_hashes.each do |hash|
  commentable = (comments + albums * 2 + photos * 2).sample
  comments << commentable.comments.create(hash.merge({ user_id: rand(11) }))
end

albums[0...5].each { |album| album.update(cover_photo: album.photos.sample) }

300.times { photos.concat(albums).sample.taggings.create(tag_id: rand(25)) }

25.times { users.sample.in_follows.create(follower_id: rand(10)) }
10.times { |i| guest.out_follows.create(followee_id: users[i]) }

500.times { photos.concat(albums).sample.likes.create(user_id: rand(11)) }
