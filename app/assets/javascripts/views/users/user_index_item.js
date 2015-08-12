Bickr.Views.UserIndexItem = Backbone.CompositeView.extend({
  template: JST['users/user_index_item'],
  tagName: 'tr',

  initialize: function () {
    this.addSubview(
      ".follow-cell",
      new Bickr.Views.Follow({ model: this.model })
    );
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ user: this.model }));
    this.attachSubviews();
  },
});
