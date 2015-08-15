Bickr.Views.AlbumsIndex = Backbone.CompositeView.extend({
  template: JST['albums/albums_index'],

  initialize: function (options) {
    this.listenTo(this.collection, 'sync', this.render);
    this.collection.each(this.addIndexItem.bind(this));
    this.listenTo(this.collection, 'add', this.addIndexItem);
    this.listenTo(this.collection, 'remove', this.removeIndexItem);
  },

  addIndexItem: function (album) {
    var view = new Bickr.Views.AlbumIndexItem({ model: album });
    this.addSubview('.albums', view);
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    var $masonGrid = this.$('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true,
    });

    this.$('.grid').imagesLoaded().done(function () {
      $masonGrid.masonry();
    });
  },

  removeIndexItem: function (album) {
    this.removeModelSubview('.albums', album);
  },
});
