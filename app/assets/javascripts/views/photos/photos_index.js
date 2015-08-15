Bickr.Views.PhotosIndex = Backbone.CompositeView.extend({
  template: JST['photos/photos_index'],

  initialize: function (options) {
    this.thumbnail = options.thumbnail;
    this.isSubview = options.isSubview;
    this.listenTo(this.collection, 'sync', this.render);
    this.collection.each(this.addIndexItem.bind(this));
    this.listenTo(this.collection, 'add', this.addIndexItem);
    this.listenTo(this.collection, 'remove', this.removeIndexItem);
  },

  addIndexItem: function (photo) {
    var view;
    if (this.thumbnail) {
      view = new Bickr.Views.PhotoThumbnail({ model: photo });
    } else {
      view = new Bickr.Views.PhotoLarge({ model: photo });
    }
    this.addSubview('.photos', view);
  },

  render: function () {
    this.$el.html(this.template({ isSubview: this.isSubview }));
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

  removeIndexItem: function (photo) {
    this.removeModelSubview('.photos', photo);
  },
});
