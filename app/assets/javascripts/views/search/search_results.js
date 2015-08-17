Bickr.Views.SearchResults = Backbone.CompositeView.extend({
  template: JST['search/search_results'],

  initialize: function (options) {
    this.query = options.query;
    this.albums = options.albums;
    this.photos = options.photos;
    this.addSubview(
      ".albums-index",
      new Bickr.Views.AlbumsIndex({ collection: this.albums })
    );
    this.addSubview(
      ".photos-index",
      new Bickr.Views.PhotosIndex({
        collection: this.photos,
        thumbnail: true,
        isSubview: true,
      })
    );
    this.listenTo(this.albums, 'sync', this.render);
    this.listenTo(this.photos, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({
      query: this.query,
      albums: this.albums,
      photos: this.photos,
    }));
    this.subviews('.albums-index').forEach(function (subview) {
      subview.render();
    });
    this.subviews('.photos-index').forEach(function (subview) {
      subview.render();
    });
    this.attachSubviews();
  },
});
