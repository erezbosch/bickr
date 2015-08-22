Backbone.TabView = Backbone.CompositeView.extend({
  events: {
    'click .nav-pills li:not(.active) a': 'renderTab',
  },

  renderTab: function (e) {
    var $targetGrid = this.$($(e.currentTarget).attr('href')).find('.grid');
    $(window).resize();
    $targetGrid.imagesLoaded(function () {
      $targetGrid.masonry('layout');
    });
  },
});
