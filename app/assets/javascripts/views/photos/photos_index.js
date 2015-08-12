Bickr.Views.PhotosIndex = Backbone.CompositeView.extend({
  template: JST['photos/photos_index'],

  initialize: function (options) {
    this.listenTo(this.collection, 'sync', this.render);
    this.collection.each(this.addIndexItem.bind(this));
    this.listenTo(this.collection, 'add', this.addIndexItem);
    this.listenTo(this.collection, 'remove', this.removeIndexItem);
  },

  addIndexItem: function (photo) {
    var view = new Bickr.Views.PhotoIndexItem({ model: photo });
    this.addSubview('#photos', view);
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
  },

  removeIndexItem: function (photo) {
    this.removeModelSubview('#photos', photo);
  },
});
