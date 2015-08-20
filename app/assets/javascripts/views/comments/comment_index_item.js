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
  },

  render: function () {
    this.$el.html(this.template({ comment: this.model }));
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
    var data = this.$('form').serializeJSON().comment;
    this.model.save(data, { success: this.render.bind(this) });
  },
});
