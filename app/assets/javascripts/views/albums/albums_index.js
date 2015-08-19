Bickr.Views.AlbumsIndex = Backbone.CompositeView.extend({
  template: JST['albums/albums_index'],

  initialize: function (options) {
    this.likes = options.likes;
    this.listenTo(this.collection, 'sync add remove', this.render);
    this.collection.each(this.addIndexItem.bind(this));
    this.listenTo(this.collection, 'add', this.addIndexItem);
    this.listenTo(this.collection, 'remove', this.removeIndexItem);
  },

  addIndexItem: function (album) {
    var view = new Bickr.Views.AlbumIndexItem({
      model: album,
      likes: this.likes
    });
    this.addSubview('.albums', view);
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    var $grid = this.$('.grid');
    $grid.imagesLoaded(function () {
      $grid.prepend($('<div>').addClass('grid-sizer'));
      $grid.masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer',
      });
    });
  },

  removeIndexItem: function (album) {
    this.removeModelSubview('.albums', album);
  },
});
