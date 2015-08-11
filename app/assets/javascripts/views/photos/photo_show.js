Bickr.Views.PhotoShow = Backbone.View.extend({
  template: JST['photos/photo_show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ photo: this.model }));
  },
});
