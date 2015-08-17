Bickr.Views.UserShow = Backbone.CompositeView.extend({
  template: JST['users/user_show'],

  initialize: function () {
    this.addSubview(
      ".albums-index",
      new Bickr.Views.AlbumsIndex({ collection: this.model.albums() })
    );
    this.addSubview(
      ".photos-index",
      new Bickr.Views.PhotosIndex({
        collection: this.model.photos(),
        thumbnail: true,
        isSubview: true,
      })
    );
    this.addSubview(
      ".follow-container",
      new Bickr.Views.Follow({ model: this.model })
    );
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ user: this.model }));
    this.subviews('.albums-index').forEach(function (subview) {
      subview.render();
    });
    this.subviews('.photos-index').forEach(function (subview) {
      subview.render();
    });
    this.attachSubviews();
  },
});
