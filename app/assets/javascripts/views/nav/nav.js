Bickr.Views.Nav = Backbone.CompositeView.extend({
  template: JST['nav/nav'],
  tagName: 'header',

  initialize: function () {
    this.addSubview(
      '.search-form',
      new Bickr.Views.Search()
    );
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
  },
});
