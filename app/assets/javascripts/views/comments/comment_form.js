Bickr.Views.CommentForm = Backbone.CompositeView.extend({
  template: JST['comments/comment_form'],

  events: {
    'click .submit': 'addComment',
  },

  addComment: function (e) {
    e.preventDefault();
    var type = this.model instanceof Bickr.Models.Photo ? 'Photo' : 'Album';
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
        this.$(':input').val('');
      }.bind(this),
    });
  },

  render: function () {
    this.$el.html(this.template({ comment: null }));
    this.attachSubviews();
  },
});
