Bickr.Views.PhotoLarge = Backbone.View.extend({
  template: JST['photos/photo_index_item'],
  className: 'photo-large-container center-block text-center',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ photo: this.model }));
    var image = $.cloudinary.image(this.model.get('public_id'), {
      width: Math.floor(window.innerWidth * (2 / 3)),
      height: Math.floor(window.innerHeight - 150),
      crop: 'limit',
    });
    this.$('.photo').append(image);
  },
});
