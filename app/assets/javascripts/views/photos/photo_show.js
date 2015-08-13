Bickr.Views.PhotoShow = Backbone.View.extend({
  template: JST['photos/photo_show'],

  events: {
    'click .delete': 'delete',
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  delete: function () {
    this.model.destroy();
    this.remove();
    window.history.back();
  },

  render: function () {
    this.$el.html(this.template({ photo: this.model }));
    if (this.model.get('public_id')) {
      var image = $.cloudinary.image(this.model.get('public_id'), {
        width: Math.floor(window.innerWidth * (2 / 3)),
        height: Math.floor(window.innerHeight - 150),
        crop: 'limit',
      });
      this.$('#photo').append(image);
    }
  },
});
