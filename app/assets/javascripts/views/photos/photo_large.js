Bickr.Views.PhotoLarge = Backbone.View.extend({
  template: JST['photos/photo_index_item'],
  className: 'photo-large-container center-block text-center',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ photo: this.model }));
    this.$('img').css('max-width', window.innerWidth * 5 / 6)
                 .css('max-height', window.innerHeight - 150);
  },
});
