Bickr.Views.PhotoLarge = Backbone.CompositeView.extend({
  template: JST['photos/photo_index_item'],
  className: 'photo-large-container center-block text-center',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.addSubview(
      '.like-container',
      new Bickr.Views.Like({ model: this.model })
    );
  },

  render: function () {
    this.$el.html(this.template({ photo: this.model }));
    this.$('img').css('max-width', window.innerWidth * 5 / 6)
                 .css('max-height', window.innerHeight - 150);
    this.attachSubviews();
  },
});
