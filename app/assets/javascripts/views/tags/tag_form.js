Bickr.Views.TagForm = Backbone.View.extend({
  template: JST['tags/tag_form'],

  events: {
    "keypress": "handleKeyPress",
  },

  handleKeyPress: function (e) {
    var keyPressed = String.fromCharCode(e.keyCode);
    if (keyPressed === ",") {
      var tagLabel = this.$('input').val();
      if (!this.model.tags().where({ label: tagLabel}).length) {
        var tag = new Bickr.Models.Tag({ label: tagLabel });
        this.model.tags().add(tag);
      }
      e.preventDefault();
      this.$('input').val('');
    }
  },

  render: function () {
    this.$el.html(this.template());
  },
});
