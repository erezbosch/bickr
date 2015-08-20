Bickr.Views.CommentForm = Backbone.CompositeView.extend({
  template: JST['comments/comment_form'],

  events: {
    'click .submit': 'addComment',
  },

  addComment: function (e) {
    e.preventDefault();
    var data = $.extend(this.$('form').serializeJSON().comment, {
      commentable_id: this.model.id,
      commentable_type: this.model instanceof Bickr.Models.Photo ? 'Photo' : 'Album'
    });
    var comment = new Bickr.Models.Comment();
    comment.save(data, {
      success: function () {
        this.collection.add(comment);
      }.bind(this),
    });
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
  },
});
