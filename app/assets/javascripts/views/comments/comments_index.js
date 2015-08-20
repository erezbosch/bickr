Bickr.Views.CommentsIndex = Backbone.CompositeView.extend({
  template: JST['comments/comments_index'],

  initialize: function () {
    this.collection = this.model.comments();
    this.listenTo(this.collection, 'sync', this.render);
    this.collection.each(this.addIndexItem.bind(this));
    this.addSubview(
      '.comment-form[data-id=' + this.model.id + ']',
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
    this.addSubview('.comments[data-id=' + this.model.id + ']', view);
  },

  render: function () {
    this.$el.html(this.template({ model: this.model }));
    this.attachSubviews();
  },

  removeIndexItem: function (comment) {
    this.removeModelSubview(
      '.comments[data-id=' + this.model.id + ']',
      comment
    );
  },
});
