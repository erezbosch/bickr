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
  },
});
