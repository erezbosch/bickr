Bickr.Views.AlbumIndexItem = Backbone.View.extend({
  template: JST['albums/album_index_item'],
  className: 'thumb-container',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ album: this.model }));
    var coverPhotoId = this.model.get('cover_photo_id');
    var coverPhoto, image;
    if (coverPhotoId) {
      coverPhoto = this.model.photos().get(coverPhotoId);
    } else if (this.model.photos().length > 0) {
      coverPhoto = this.model.photos().first();
    } // else => coverPhoto = Placeholder? Store Placeholder data in DB or as global JS object?
    if (coverPhoto) {
      image = $.cloudinary.image(coverPhoto.get('public_id'), {
        height: 250,
        crop: 'limit',
      });
    } else {
      image = $('<div>').css('height', '250px')
                        .css('width', '250px')
                        .addClass('album-placeholder')
                        .text('No Photos!');
    }
    this.$('.cover-photo').append(image);
  },
});
