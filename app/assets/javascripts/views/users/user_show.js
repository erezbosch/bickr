Bickr.Views.UserShow = Backbone.CompositeView.extend({
  template: JST['users/user_show'],

  events: {
    'click .nav-tabs li:not(.active) a': 'renderTab',
  },

  initialize: function () {
    this.addSubview(
      ".albums-index",
      new Bickr.Views.AlbumsIndex({ collection: this.model.albums() })
    );
    this.addSubview(
      ".photos-index",
      new Bickr.Views.PhotosIndex({
        collection: this.model.photos(),
        thumbnail: true,
        isSubview: true,
      })
    );
    this.addSubview(
      ".follow-container",
      new Bickr.Views.Follow({ model: this.model })
    );
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ user: this.model }));
    this.eachSubview(function (subview) {
      subview.render();
    });
    this.attachSubviews();
  },

  renderTab: function (e) {
    if (this.renderedTabs) { return; }
    setTimeout(function () {
      var $targetGrid = this.$($(e.currentTarget).attr('href')).find('.grid');
      $targetGrid.imagesLoaded(function() {
        $targetGrid.masonry('layout');
      });
      this.renderedTabs = true;
    }.bind(this), 150);
  },
});
