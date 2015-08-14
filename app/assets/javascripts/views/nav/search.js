Bickr.Views.Search = Backbone.View.extend({
  template: JST['nav/search'],

  events: {
    'click button': 'search',
  },

  render: function () {
    this.$el.html(this.template());
  },

  search: function (e) {
    e.preventDefault();
    var queryText = this.$('input').val();
    this.$('input').val('');
    Backbone.history.navigate('/api/search?q=' + queryText, { trigger: true });
  },
});
