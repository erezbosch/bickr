Bickr.Views.PhotoIndexItem = Backbone.View.extend({
  template: JST['photos/photo_index_item'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ photo: this.model }));
  },
});
