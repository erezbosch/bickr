Bickr.Views.PhotoThumbnail = Backbone.CompositeView.extend({
  template: JST['photos/photo_index_item'],
  className: 'grid-item',

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
    this.addSubview(
      '.like-container',
      new Bickr.Views.Like({ model: this.model })
    );
    if (options.likes) {
      this.listenTo(this.model, 'change:numLikes', this.remove);
    }
  },

  render: function () {
    this.$el.html(this.template({ photo: this.model }));
    this.attachSubviews();
  },
});
