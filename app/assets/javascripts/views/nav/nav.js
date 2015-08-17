Bickr.Views.Nav = Backbone.CompositeView.extend({
  template: JST['nav/nav'],
  tagName: 'header',

  events: {
    'dblclick .you': 'goToYou',
  },

  initialize: function () {
    this.addSubview(
      '.search-form',
      new Bickr.Views.Search()
    );
  },

  goToYou: function () {
    Backbone.history.navigate(
      '#/api/users/' + CURRENT_USER.id,
      { trigger: true }
    );
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
  },
});
