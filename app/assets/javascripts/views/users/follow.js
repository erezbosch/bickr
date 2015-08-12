Bickr.Views.Follow = Backbone.View.extend({
  template: JST['users/follow'],

  events: {
    'click button': 'toggleFollow'
  },

  initialize: function () {
    this.listenTo(this.model, 'followtoggle', this.render);
  },

  toggleFollow: function (e) {
    e.preventDefault();
    this.model.toggleFollow();
  },

  render: function () {
    this.$el.html(this.template({ follow: this.model.follow() }));
  },
});
