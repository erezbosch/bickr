Bickr.Views.CommentIndexItem = Backbone.CompositeView.extend({
  template: JST['comments/comment_index_item'],
  tagName: 'li',

  events: {
    'click .delete-comment': 'delete',
    'click .edit-comment': 'edit',
    'click .submit-edit': 'submitEdit',
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.addSubview(
      '.comments-index[data-id=' + this.model.id + ']',
      new Bickr.Views.CommentsIndex({ model: this.model })
    );
    this.addSubview(
      '.comment-form[data-id=' + this.model.id + ']',
      new Bickr.Views.CommentForm({
        collection: this.model.comments(),
        model: this.model,
        parentView: this,
      })
    );
  },

  render: function () {
    this.$el.html(this.template({
      comment: this.model,
      formView: this.subviews('.comment-form[data-id=' + this.model.id + ']')
                    .first()
     }));
    this.attachSubviews();
  },

  delete: function (e) {
    e.preventDefault();
    this.model.destroy();
    this.remove();
  },

  edit: function (e) {
    e.preventDefault();
    this.$el.html(JST['comments/comment_form']({ comment: this.model }));
  },

  submitEdit: function (e) {
    e.preventDefault();
    if ($(e.currentTarget).data('id') === this.model.id) {
      var data = this.$('form').serializeJSON().comment;
      this.model.save(data, { success: this.render.bind(this) });
    }
  },
});
