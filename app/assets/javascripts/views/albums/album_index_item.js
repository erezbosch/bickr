Bickr.Views.AlbumIndexItem = Backbone.View.extend({
  template: JST['albums/album_index_item'],
  className: 'album-item-container',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ album: this.model }));
    // debugger;
    var coverPhotoId = this.model.get('cover_photo_id');
    var coverPhoto, image;
    if (coverPhotoId) {
      coverPhoto = this.model.photos().getOrFetch({
        cover_photo_id: coverPhotoId
      });
    } else if (this.model.photos().length > 0) {
      coverPhoto = this.model.photos().first();
    }
    if (coverPhoto) {
      image = $.cloudinary.image(coverPhoto.get('public_id'), {
        height: 250,
        crop: 'limit',
      });
    } else {
      image = $('<div>').css('height', '250px')
                        .css('width', '250px')
                        .addClass('album-placeholder-image');
    }
    this.$('.cover-photo').append(image);
  },
});
