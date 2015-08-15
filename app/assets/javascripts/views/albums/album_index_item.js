Bickr.Views.AlbumIndexItem = Backbone.View.extend({
  template: JST['albums/album_index_item'],
  className: 'grid-item',

  initialize: function () {
    this.listenTo(
      this.model,
      'sync change:title change:cover_photo_id add',
      this.render
    );
  },

  render: function () {
    var coverPhotoId = this.model.get('cover_photo_id');
    var coverPhoto, image;
    if (coverPhotoId) {
      coverPhoto = this.model.photos().get(coverPhotoId);
    } else if (this.model.photos().length > 0) {
      coverPhoto = this.model.photos().first();
    }
    if (coverPhoto) {
      image = $('<img>').attr('src', coverPhoto.escape('image_url'))
                        .attr('alt', this.model.escape('title'));
    } else {
      image = $('<div>').addClass('album-placeholder')
                        .text('No Photos!');
    }
    this.$el.html(this.template({ album: this.model }));
    this.$('.cover-photo').append(image);
  },
});
