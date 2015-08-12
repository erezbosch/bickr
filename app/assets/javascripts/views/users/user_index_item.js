Bickr.Views.UserIndexItem = Backbone.View.extend({
  template: JST['users/user_index_item'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ user: this.model }));
  },
});
