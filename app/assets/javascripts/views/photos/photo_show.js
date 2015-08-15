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
        width: Math.floor(window.innerWidth * (5 / 6)),
        height: Math.floor(window.innerHeight - 300),
        crop: 'limit',
      });
      this.$('#photo').append(image);
    }
  },
});
