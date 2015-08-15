Bickr.Views.PhotoThumbnail = Backbone.View.extend({
  template: JST['photos/photo_index_item'],
  className: 'thumb-container',

  events: {
    'click': 'viewPhoto',
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  viewPhoto: function () {
    var modalView = new Bickr.Views.PhotoModal({ model: this.model });
    $('body').append(modalView.$el);
    modalView.render();
  },

  render: function () {
    this.$el.html(this.template({ photo: this.model }));
    var image = $.cloudinary.image(this.model.get('public_id'), {
      height: 250,
      crop: 'limit',
    });
    this.$('.photo').append(image);
  },
});
