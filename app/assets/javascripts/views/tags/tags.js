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
    // NB we don't want to destroy the tag, just the tagging. Which is done
    // in rails on form submit.
    this.collection.remove(targetTag);
  },
});
