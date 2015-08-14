Bickr.Views.Search = Backbone.View.extend({
  template: JST['nav/search'],

  events: {
    'click button': 'search',
  },

  initialize: function (options) {
    this.router = options.router;
  },

  render: function () {
    this.$el.html(this.template());
  },

  search: function (e) {
    e.preventDefault();
    var searchText = this.$('input').val();
    this.$('input').val('');
    this.router.search(searchText);
  },
});
