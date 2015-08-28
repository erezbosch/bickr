Bickr.Views.PhotoThumbnail = Backbone.CompositeView.extend({
  template: JST['photos/photo_index_item'],
  className: 'grid-item',

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
    this.addSubview(
      '.like-container',
      new Bickr.Views.Like({ model: this.model })
    );
    if (options.likes) {
      this.listenTo(this.model, 'change:numLikes', this.remove);
    }
  },

  render: function () {
    var url = this.model.escape('image_url');
    url = url.split('upload/');
    var numCols = Math.min(Math.floor(window.innerWidth / 250), 6);
    var colWidth = Math.floor((window.innerWidth - 15) / numCols);
    url[1] = 'w_' + colWidth + ',c_limit/' + url[1];
    url = url.join('upload/');
    this.$el.html(this.template({ photo: this.model, url: url }));
    this.attachSubviews();
  },
});
