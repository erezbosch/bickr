Bickr.Views.PhotoModal = Backbone.View.extend({
  template: JST['photos/photo_modal'],

  events: {
    'click .delete': 'delete',
    'click .m-background': 'remove',
    'click .close': 'removeBtn',
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    $(document).on('keyup', this.handleKey.bind(this));
  },

  handleKey: function (event) {
    if (event.keyCode === 27) {
      this.remove();
    }
  },

  remove: function () {
    $(document).off('keyup');
    Backbone.View.prototype.remove.call(this);
  },

  buttonRemove: function (event) {
    event.preventDefault();
    this.remove();
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
