Bickr.Views.CommentIndexItem = Backbone.CompositeView.extend({
  template: JST['comments/comment_index_item'],
  tagName: 'li',

  initialize: function () {
    this.listenTo(this.model, 'sync change', this.render);
  },

  render: function () {
    this.$el.html(this.template({ comment: this.model }));
    this.attachSubviews();
  },
});
