Bickr.Views.UserLikes = Backbone.CompositeView.extend({
  template: JST['users/user_likes'],

  initialize: function (options) {
    this.albums = options.albums;
    this.photos = options.photos;
    this.addSubview(
      ".albums-index",
      new Bickr.Views.AlbumsIndex({ collection: this.albums, likes: true })
    );
    this.addSubview(
      ".photos-index",
      new Bickr.Views.PhotosIndex({
        collection: this.photos,
        thumbnail: true,
        isSubview: true,
        likes: true
      })
    );
    this.listenTo(this.albums, 'sync', this.render);
    this.listenTo(this.photos, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ albums: this.albums, photos: this.photos, }));
    this.attachSubviews();
  },
});
