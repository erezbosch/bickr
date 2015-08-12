Bickr.Views.PhotoIndexItem = Backbone.View.extend({
  template: JST['photos/photo_index_item'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ photo: this.model }));
    var image = $.cloudinary.image(this.model.get('public_id'), {
      width: 250,
      height: 250,
      crop: 'fill'
    });
    this.$('.photo').append(image);
  },
});
