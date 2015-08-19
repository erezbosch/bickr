Bickr.Views.UsersIndex = Backbone.CompositeView.extend({
  template: JST['users/users_index'],

  initialize: function (options) {
    this.listenTo(this.collection, 'sync', this.render);
    this.collection.each(this.addIndexItem.bind(this));
    this.listenTo(this.collection, 'add', this.addIndexItem);
    this.listenTo(this.collection, 'remove', this.removeIndexItem);
  },

  addIndexItem: function (user) {
    var view = new Bickr.Views.UserIndexItem({ model: user });
    this.addSubview('#users', view);
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    var $grid = this.$('#users');
    $grid.imagesLoaded(function () {
      $grid.prepend($('<div>').addClass('grid-sizer'));
      $grid.masonry({
        itemSelector: '.user-index-item',
        percentPosition: true,
        columnWidth: '.grid-sizer',
      });
    });
  },

  removeIndexItem: function (user) {
    this.removeModelSubview('#users', user);
  },
});
