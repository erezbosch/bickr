Bickr.Views.CommentsIndex = Backbone.CompositeView.extend({
  template: JST['comments/comments_index'],

  initialize: function () {
    this.collection = this.model.comments();
    this.listenTo(this.collection, 'sync', this.render);
    this.collection.each(this.addIndexItem.bind(this));
    this.addSubview(
      '.comment-form:not(.replies-index .comment-form)',
      new Bickr.Views.CommentForm({
        collection: this.collection,
        model: this.model,
      })
    );
    this.listenTo(this.collection, 'add', this.addIndexItem);
    this.listenTo(this.collection, 'remove', this.removeIndexItem);
  },

  addIndexItem: function (comment) {
    var view = new Bickr.Views.CommentIndexItem({ model: comment });
    this.addSubview('.comments:not(.replies-index .comments)', view);
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
  },

  removeIndexItem: function (comment) {
    this.removeModelSubview('.comments:not(.replies-index .comments)', comment);
  },
});
