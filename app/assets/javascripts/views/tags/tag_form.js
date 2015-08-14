Bickr.Views.TagForm = Backbone.View.extend({
  template: JST['tags/tag_form'],

  events: {
    "keypress": "handleKeyPress",
  },

  handleKeyPress: function (e) {
    var keyPressed = String.fromCharCode(e.keyCode);
    if (keyPressed === ",") {
      var tagLabel = this.$('input').val();
      var type = this.model instanceof Bickr.Models.Photo ? "Photo" : "Album";
      var tag = new Bickr.Models.Tag();
      tag.save({ id: this.model.id, type: type, label: tagLabel }, {
        success: function () {
          console.log("What!!");
        }
      });
      e.preventDefault();
      this.$('input').val('');
    }
  },

  render: function () {
    this.$el.html(this.template());
  },
});
