Bickr.Views.PhotoThumbnail = Backbone.CompositeView.extend({
  template: JST['photos/photo_index_item'],
  className: 'grid-item',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.addSubview(
      '.like-container',
      new Bickr.Views.Like({ model: this.model })
    );
  },

  render: function () {
    this.$el.html(this.template({ photo: this.model }));
    this.attachSubviews();
  },
});
