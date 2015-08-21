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
avatars = [
  'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440089963/rhf52skfmx94r6jwo8qi.png',
  'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1439945523/pi4d8snzwytzgzyx331x.gif',
  'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1439944477/gaulcveo3rlmszca2pof.jpg',
  'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1439853846/xbdqzxz9fxpugvcipbck.jpg',
  'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440173888/Astronotus_ocellatus_-_closeup__aka_jwy14g.jpg',
  'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440173911/Snail_0075_prbzxc.jpg',
  'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440173926/Toddy_Dog_bunvkt.jpg',
  'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440173940/Elephant__Loxodonta_Africana__04_fkmv3v.jpg',
  'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440174588/eagle-eye-katie-abrams_ds5q6m.jpg'
] # 8 x cloudinary image urls
comment_hashes = Array.new(500) {} # some faker things

users = Array.new(avatars.length * 1.25) do |i| # give them avatar_url
  User.create(
    email: Faker::Internet.safe_email,
    password: 'password',
    avatar_url: i < avatars.length ? avatars[i] : nil
  )
end
users << User.create(
  email: 'guest@example.com',
  password: 'password',
  avatar_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440005771/gknctceka4r9zfrlbng9.jpg'
)

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
  comments << commentable.comments.create(hash.merge({
    user_id: rand(users.length)
  }))
end

albums[0...albums.length / 2].each do |album|
  album.update(cover_photo: album.photos.sample)
end

(photos.concat(albums).length * 4).times do
  photos.concat(albums).sample.taggings.create(tag_id: rand(tags.length))
end

(users.length * 3).times do
  users.sample.in_follows.create(follower_id: rand(users.length - 1))
end

(users.length - 1).times do |i|
  users.last.out_follows.create(followee_id: users[i])
end

(photos.concat(albums).length * 4).times do
  photos.concat(albums).sample.likes.create(user_id: rand(users.length))
end
