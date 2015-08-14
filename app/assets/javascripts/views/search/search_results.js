Bickr.Views.SearchResults = Backbone.CompositeView.extend({
  template: JST['search/search_results'],

  initialize: function (options) {
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
    this.query = options.query;
  },

  render: function () {
    this.$el.html(this.template({
      query: this.query,
      albums: this.albums,
      photos: this.photos,
    }));
    this.attachSubviews();
  },
});
