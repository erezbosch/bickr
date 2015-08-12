# Phase 4: Albums

## Rails
### Models
* Albums

### Controllers
* Api::AlbumsController (show, create)
* Api::UsersController (show for albums only, show for photos only, show for both)

### Views

## Backbone
### Models
* Album

### Collections
* Albums

### Views
* AlbumsIndex (composite view, has AlbumIndexItem subviews)
* AlbumIndexItem
* AlbumForm
* UserShow (composite view, has AlbumsIndex subview and PhotosIndex subview)

## Gems/Libraries
