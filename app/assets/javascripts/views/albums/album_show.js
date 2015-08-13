Bickr.Views.AlbumShow = Backbone.CompositeView.extend({
  template: JST['albums/album_show'],

  initialize: function () {
    this.addSubview(
      ".photos-index",
      new Bickr.Views.PhotosIndex({
        collection: this.model.photos(),
        thumbnail: true,
        isSubview: true,
      })
    );
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ album: this.model }));
    this.attachSubviews();
  },
});
