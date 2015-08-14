Bickr.Views.Nav = Backbone.CompositeView.extend({
  template: JST['nav/nav'],
  tagName: 'header',

  initialize: function (options) {
    this.addSubview(
      '.search-form',
      new Bickr.Views.Search({ router: options.router })
    );
    this.router = options.router;
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
  },
});
