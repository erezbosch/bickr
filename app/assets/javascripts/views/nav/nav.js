Bickr.Views.Nav = Backbone.View.extend({
  template: JST['nav/nav'],
  tagName: 'header',
  render: function () {
    this.$el.html(this.template());
  }
});
