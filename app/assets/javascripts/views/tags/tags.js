Bickr.Views.Tags = Backbone.View.extend({
  template: JST['tags/tags'],

  events: {
    'click .tag-link': 'removeTag',
  },

  initialize: function () {
    this.listenTo(this.collection, 'sync add remove', this.render);
  },

  render: function () {
    this.$el.html(this.template({ tags: this.collection }));
  },

  removeTag: function (e) {
    var $link = $(e.currentTarget);
    var targetTag = this.collection.find(function (tag) {
      return tag.get('label') === $link.text();
    });
    this.collection.remove(targetTag);
    // note we DON'T want to destroy the tag, just the tagging which is done
    // in rails on form submit
  },
});
