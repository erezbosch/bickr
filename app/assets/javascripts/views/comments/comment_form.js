Bickr.Views.CommentForm = Backbone.View.extend({
  template: JST['comments/comment_form'],

  events: {
    'click .show-form': 'showForm',
    'click .add-comment': 'addComment',
  },

  addComment: function (e) {
    e.preventDefault();
    var type;
    if (this.model instanceof Bickr.Models.Comment) {
      type = 'Comment';
    } else {
      type = this.model instanceof Bickr.Models.Photo ? 'Photo' : 'Album';
    }
    var data = $.extend(this.$('form').serializeJSON().comment, {
      commentable_id: this.model.id,
      commentable_type: type,
      user_email: CURRENT_USER.email,
      user_avatar_url: CURRENT_USER.avatarUrl,
    });
    var comment = new Bickr.Models.Comment();
    comment.save(data, {
      success: function () {
        this.collection.add(comment);
        this.render();
      }.bind(this),
    });
  },

  showForm: function (e) {
    e.preventDefault();
    this.$el.html(this.template({ comment: null }));
  },

  render: function () {
    this.$el.html(JST['comments/comment_form_button']({ model: this.model }));
  }
});
