Bickr.Views.Follow = Backbone.View.extend({
  template: JST['users/follow'],

  tagName: "button",

  events: {
    "click": "toggleFollow"
  },

  toggleFollow: function (e) {
    e.preventDefault();
    this.model.toggleFollow();
  },

  render: function () {
    this.$el.html(this.template({ follow: this.model.follow() }));
  }
});
