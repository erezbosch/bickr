Bickr.Views.UserAlbums = Backbone.CompositeView.extend({
  template: JST['users/user_albums'],

  initialize: function () {
    this.addSubview(
      ".albums-index",
      new Bickr.Views.AlbumsIndex({ collection: this.model.albums() })
    );
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ user: this.model }));
    this.attachSubviews();
  },
});