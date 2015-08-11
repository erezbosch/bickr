# Bickr

[Heroku Link](http://bickr.herokuapp.com)

## Minimum Viable Product
It's flickr for pictures of arguments! It's built on Rails and Backbone! Users can:

- [x] Create accounts
- [x] Log in and out
- [ ] Upload photos
- [ ] View photos
- [ ] Create albums
- [ ] Follow other users
- [ ] View a photostream of followed users' photos
- [ ] Tag photos
- [ ] Search for photos by tag / albums by title

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication and Basic Photo Upload (~1 day)
I will implement user authentication in Rails using the practices learned at App
Academy. I will add a simple Rails text form to fake photo uploads and push
the app to Heroku.

[Details][phase-one]

### Phase 2: Photo Upload and View (~1 day)
I will use Cloudinary to allow users to upload photos and
store the photos in the database. I'll add API routes that provide JSON data for
photos, and a Backbone model to fetch that data. By the end of this
phase, users will be able to upload photos and view them.

[Details][phase-two]

### Phase 3: Photostream and Landing Page (~3 days)
First, I'll add an API route that displays all of the `current_user`'s uploaded photos.
Then, I'll add a Backbone collection for photos that fetches from that route, to allow
the user to view a photostream consisting of all of their uploaded photos.
I will enable image resizing and have the photostream display
thumbnail-sized images. I will allow the photos index route to optionally provide
the `current_user`'s `followee_photos`, as well as `recommended` photos, ordered
chronologically. This will be the page users see after logging in.

[Details][phase-three]

### Phase 4: Albums (~1 day)
I'll allow users to create albums and to add photos to their albums on upload or
while editing the photos. I'll also make a Backbone `AlbumShow` view with a
`photos` collection that is fetched from that route. I'll modify the UserShow Backbone
view so that it also displays the user's albums.

[Details][phase-four]

### Phase 5: Search (~2 days)
I'll add `search` routes to both the photos and albums controllers. The search
results should include photos with the search query as a tag, and albums including the
query in their title. On the Backbone side, there will be a `SearchResults` composite
view that has `AlbumsIndex` and `PhotosIndex` subviews which fetch from the `search` routes.

[Details][phase-five]

### Bonus Features (TBD)
- [ ] Downloading photos
- [ ] Drag and drop uploading
- [ ] Likes and like counts for photos
- [ ] Comments on photos
- [ ] User avatars
- [ ] Search results are displayed in categories like Your Albums, From People You Follow, Other, etc.
- [ ] Parse Exif metadata of uploaded photos and show date/time and camera data
- [ ] Pagination/infinite scroll
- [ ] Multiple sessions/session management
- [ ] Typeahead search bar

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
