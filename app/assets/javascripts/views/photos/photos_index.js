Bickr.Views.PhotosIndex = Backbone.View.extend({
  template: JST['photos_index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync add remove reset', this.render);
  },

  render: function () {
    this.$el.html(this.template({ photos: this.collection }));
  },
});
