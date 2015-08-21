Bickr.Views.Tags = Backbone.View.extend({
  template: JST['tags/tags'],

  events: {
    'click .tag-link': 'removeTag',
    "keypress": "handleKeyPress",
  },

  initialize: function () {
    this.listenTo(this.collection, 'sync add remove', this.render);
  },

  handleKeyPress: function (e) {
    var keyPressed = String.fromCharCode(e.keyCode);
    if (keyPressed === ",") {
      var tagLabel = this.$('input').val();
      if (!this.collection.where({ label: tagLabel }).length) {
        this.collection.add(new Bickr.Models.Tag({ label: tagLabel }));
      }
      e.preventDefault();
      this.$('input').val('');
      this.$('input').focus();
    }
  },

  removeTag: function (e) {
    var targetLabel = $(e.currentTarget).text().trim();
    var targetTag = this.collection.find(function (tag) {
      return tag.get('label') === targetLabel;
    });
    // NB we don't want to destroy the tag, just the tagging. Which is done
    // in rails on form submit.
    this.collection.remove(targetTag);
  },

  render: function () {
    this.$el.html(this.template({ tags: this.collection }));
  },
});
