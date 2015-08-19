Backbone.TabView = Backbone.CompositeView.extend({
  events: {
    'click .nav-pills li:not(.active) a': 'renderTab',
  },

  renderTab: function (e) {
    if (this.renderedTabs) { return; }
    // reset layout after allowing opacity transition to occur
    setTimeout(function () {
      var $targetGrid = this.$($(e.currentTarget).attr('href')).find('.grid');
      $targetGrid.imagesLoaded(function() {
        $targetGrid.masonry('layout');
      });
      this.renderedTabs = true;
    }.bind(this), 200);
  },
});
