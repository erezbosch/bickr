# Bickr

##[Live](http://bickr.co)

An argument photo website built on Rails and Backbone.

You can:

* Create account(s)
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

### Technologies Used
* Rails
* Backbone
* PostgreSQL
* The Masonry JS library is used to organize photo thumbnails.
* The Cloudinary API is used to upload and store photos.
* The Wordnik API is used to obtain seed data for comments, tags, album titles
and album descriptions.
* Bootstrap` is used for styling.
* JBuilder is used to massage JSON responses to AJAX requests.
* faker is used to create sample user data.
* BCrypt is used for user authentication.
* figaro is used to store Cloudinary configuration data in a git-ignored YAML file.

### Other Details
* Polymorphic associations are used for comments, taggings and likes.
* Comments can belong to other comments (i.e. be replies), so in Backbone, each CommentIndexItem view has a CommentsIndex which contains CommentIndexItem views for each of the comment's replies.
* CompositeView, TabView and FetchableCollection Backbone extensions minimize code repetition, along with Searchable, Taggable, Likable and Commentable Rails concerns.
* `likes` and `follows` hashes are used to minimize DB requests for the current user's likes and follows.
* Backbone model parse functions are overridden to set up what are in essence `has_many` associations.
* When a photo is uploaded, the title field in the photo form - if not already filled in - will default to a URI-decoded version of the photo filename.
* Multiple tags can be added in the photo/album create/edit pages at a time, and once added, they can still be viewed in the tags input box, and removed when clicked. Backbone doesn't save the tags until the "Submit" button is pressed, at which point it passes the tag data to the Rails controller, which has a function that will parse it and add/delete taggings as necessary.
* Search is implemented by having Backbone send query string data with its AJAX requests, allowing Rails to parse it and determine the search.
* User authentication is implemented with BCrypt, storing a user's `password_digest` and `session_token` instead of storing their password, and authenticating users by checking if a provided password hashes to the correct `password_digest`. Once a user logs in, a `SecureRandom` string is generated, which the user's `session_token` is set to, and is then added to the `session` cookies, where it can be compared with the `session_token`s in the users table in order to find the current user.

### ToDos (Bonus Features)
- [ ] Parse Exif metadata of uploaded photos and show date/time and camera data
- [ ] Pagination/infinite scroll
- [ ] Multiple sessions/session management
