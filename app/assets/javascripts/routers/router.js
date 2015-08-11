Bickr.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'photosIndex',
    'photos/new': 'photoNew',
    'photos/:id/edit': 'photoEdit',
    'photos/:id': 'photoShow',
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.photos = options.photos;
  },

  photosIndex: function () {
    this.photos.fetch();
    var view = new Bickr.Views.PhotosIndex({ collection: this.photos });
    this._swapView(view);
  },

  photoNew: function () {
    var view = new Bickr.Views.PhotoForm({
      model: new Bickr.Models.Photo(),
      collection: this.photos,
     });
    this._swapView(view);
  },

  photoEdit: function (id) {
    var view = new Bickr.Views.PhotoForm({
      model: this.photos.getOrFetch(id),
      collection: this.photos,
    });
    this._swapView(view);
  },

  photoShow: function (id) {
    var view = new Bickr.Views.PhotoShow({ model: this.photos.getOrFetch(id) });
    this._swapView(view);
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  },
});