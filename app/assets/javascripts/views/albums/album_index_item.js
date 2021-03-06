Bickr.Views.AlbumIndexItem = Backbone.CompositeView.extend({
  template: JST['albums/album_index_item'],
  className: 'grid-item',

  initialize: function (options) {
    this.addSubview(
      '.like-container',
      new Bickr.Views.Like({ model: this.model })
    );
    this.listenTo(
      this.model,
      'sync change:title change:cover_photo_id add',
      this.render
    );
    if (options.likes) {
      this.listenTo(this.model, 'change:numLikes', this.remove);
    }
  },

  getCoverPhoto: function () {
    var coverPhotoId = this.model.get('cover_photo_id');
    var coverPhoto, $image;
    if (coverPhotoId) {
      coverPhoto = this.model.photos().get(coverPhotoId);
    } else if (this.model.photos().length > 0) {
      coverPhoto = this.model.photos().first();
    }
    if (coverPhoto) {
      var url = coverPhoto.escape('image_url');
      url = url.split('upload/');
      var numCols = Math.min(Math.floor(window.innerWidth / 250), 6);
      var colWidth = Math.floor((window.innerWidth - 15) / numCols);
      url[1] = 'w_' + colWidth + ',c_limit/' + url[1];
      url = url.join('upload/');
      $image = $('<img>').attr('src', url)
                        .attr('alt', this.model.escape('title'));
    } else {
      $image = $('<div>').addClass('album-placeholder')
                        .text('No Photos!');
    }
    return $image;
  },

  render: function () {
    this.$el.html(this.template({ album: this.model }));
    this.$('.cover-photo').append(this.getCoverPhoto());
    this.attachSubviews();
  },
});
