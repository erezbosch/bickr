Bickr.Views.AlbumShow = Backbone.CompositeView.extend({
  template: JST['albums/album_show'],

  events: {
    'click .delete': 'delete',
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.addSubview(
      '.like-container',
      new Bickr.Views.Like({ model: this.model })
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
      '.comment-form',
      new Bickr.Views.CommentForm({
        collection: this.model.comments(),
        model: this.model,
      })
    );
  },

  delete: function () {
    this.model.destroy();
    this.remove();
    Backbone.history.navigate(
      '/api/users/' + CURRENT_USER.id + '/albums',
      { trigger: true }
    );
  },

  render: function () {
    this.$el.html(this.template({ album: this.model }));
    this.attachSubviews();
  },
});
