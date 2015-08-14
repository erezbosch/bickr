Bickr.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'photosIndex',
    'api/photos/new': 'photoNew',
    'api/photos/:id/edit': 'photoEdit',
    'api/photos/:id': 'photoShow',
    'api/users': 'usersIndex',
    'api/users/:id/photos': 'photostream',
    'api/users/:id/albums': 'userAlbums',
    'api/users/:id': 'userShow',
    'api/albums/new': 'albumNew',
    'api/albums/:id/edit': 'albumEdit',
    'api/albums/:id': 'albumShow',
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.photos = options.photos;
    this.users = options.users;
    this.albums = options.albums;
  },

  photosIndex: function () {
    this.photos.fetch();
    var view = new Bickr.Views.PhotosIndex({ collection: this.photos });
    this._swapView(view);
  },

  photoNew: function () {
    this.albums.fetch();
    var view = new Bickr.Views.PhotoForm({
      model: new Bickr.Models.Photo(),
      collection: this.photos,
      albums: this.albums,
     });
    this._swapView(view);
  },

  photoEdit: function (id) {
    this.albums.fetch();
    var view = new Bickr.Views.PhotoForm({
      model: this.photos.getOrFetch(id),
      collection: this.photos,
      albums: this.albums,
    });
    this._swapView(view);
  },

  photoShow: function (id) {
    var view = new Bickr.Views.PhotoShow({ model: this.photos.getOrFetch(id) });
    this._swapView(view);
  },

  usersIndex: function () {
    this.users.fetch();
    var view = new Bickr.Views.UsersIndex({ collection: this.users });
    this._swapView(view);
  },

  photostream: function (id) {
    var view = new Bickr.Views.Photostream({
      model: this.users.getOrFetch(id, { data: { show_photos: true } })
    });
    this._swapView(view);
  },

  userAlbums: function (id) {
    var view = new Bickr.Views.UserAlbums({
      model: this.users.getOrFetch(id, { data: { show_albums: true } })
    });
    this._swapView(view);
  },

  userShow: function (id) {
    var view = new Bickr.Views.UserShow({
      model: this.users.getOrFetch(id, {
        data: { show_albums: true, show_photos: true }
      })
    });
    this._swapView(view);
  },

  albumShow: function (id) {
    var view = new Bickr.Views.AlbumShow({ model: this.albums.getOrFetch(id) });
    this._swapView(view);
  },

  albumNew: function () {
    var view = new Bickr.Views.AlbumForm({
      model: new Bickr.Models.Album(),
      collection: this.albums,
     });
    this._swapView(view);
  },

  albumEdit: function (id) {
    var view = new Bickr.Views.AlbumForm({
      model: this.albums.getOrFetch(id),
      collection: this.albums,
     });
    this._swapView(view);
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  },
});
