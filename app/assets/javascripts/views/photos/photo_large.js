Bickr.Views.PhotoLarge = Backbone.View.extend({
  template: JST['photos/photo_list_item'],
  className: 'photo-li-container',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ photo: this.model }));
    var image = $.cloudinary.image(this.model.get('public_id'), {
      width: Math.floor(window.innerWidth * (2 / 3)),
      crop: 'limit',
    });
    this.$('.photo').append(image);
  },
});
