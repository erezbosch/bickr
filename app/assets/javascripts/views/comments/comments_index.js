Bickr.Views.CommentsIndex = Backbone.CompositeView.extend({
  template: JST['comments/comments_index'],

  events: {
    'click .delete': 'delete',
    'click .edit': 'edit',
  },

  initialize: function (options) {
    this.listenTo(this.collection, 'sync add remove', this.render);
    this.collection.each(this.addIndexItem.bind(this));
    this.listenTo(this.collection, 'add', this.addIndexItem);
    this.listenTo(this.collection, 'remove', this.removeIndexItem);
  },

  addIndexItem: function (comment) {
    var view = new Bickr.Views.CommentIndexItem({ model: comment });
    this.addSubview('.comments', view);
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
  },

  removeIndexItem: function (comment) {
    this.removeModelSubview('.comments', comment);
  },
});
