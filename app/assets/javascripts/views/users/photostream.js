Bickr.Views.photostream = Backbone.CompositeView.extend({
  template: JST['users/photostream'],

  initialize: function () {
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
    this.attachSubviews();
  },
});
