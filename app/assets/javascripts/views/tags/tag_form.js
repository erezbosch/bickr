Bickr.Views.TagForm = Backbone.View.extend({
  template: JST['tags/tag_form'],

  events: {
    "keypress": "handleKeyPress",
  },

  handleKeyPress: function (e) {
    var keyPressed = String.fromCharCode(e.keyCode);
    if (keyPressed === ",") {
      var tagLabel = this.$('input').val();
      var tag = new Bickr.Models.Tag({ label: tagLabel });
      tag.save({ taggable: this.model })
      e.preventDefault();
      this.$('input').val("");
    }
  },

  render: function () {
    this.$el.html(this.template());
  },
});
