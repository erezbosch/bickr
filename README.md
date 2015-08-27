# Bickr

##[Live](http://bickr.co)

An argument photo website built on Rails and Backbone.

You can:

* Create accounts
* Log in and out
* Upload photos
* View photos
* Create and view albums
* Follow other users
* View a photostream of followed users' photos
* Tag photos and albums
* Search for photos and albums by tag and title
* Download photos
* Like and see the like counts of photos/albums
* Comment on photos/albums
* Reply to your own or other users' comments
* Upload avatar images

### Details

* The `Masonry` JS library is used to organize photo thumbnails.
* The `Cloudinary` API is used to upload and store photos.
* The `Wordnik` API is used to obtain seed data for comments, tags, album titles
and album descriptions.
* The `faker` gem is used to create sample user data.
* Bootstrap is used for styling.
* JBuilder is used to massage JSON responses to AJAX requests.

### To Do: Bonus Features
- [ ] Parse Exif metadata of uploaded photos and show date/time and camera data
- [ ] Pagination/infinite scroll
- [ ] Multiple sessions/session management
- [ ] Typeahead search bar
