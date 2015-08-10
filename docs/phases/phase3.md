# Phase 3: Photostream and Landing Page

## Rails
### Models

### Controllers
* API::PhotosController (current_user_photos, landing_page_photos, thumbnail)
* API::UsersController (photos)

### Views

## Backbone
### Models

### Collections
* Photos

### Views
* PhotosIndexFullsize (composite view, has PhotoFullsize subviews)
* PhotosIndexThumbnail (composite view, has PhotoThumbnail subviews)
* PhotoThumbnail
* PhotoFullsize
* UserShow (composite view, has PhotoThumbnail subviews)

## Gems/Libraries
* MiniMagick
