Bickr.Views.Tags = Backbone.View.extend({
  template: JST['tags/tags'],

  initialize: function () {
    this.listenTo(this.collection, 'sync add remove', this.render);
  },

  render: function () {
    this.$el.html(this.template({ tags: this.collection }));
  },
});
