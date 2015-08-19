window.Bickr = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Bickr.Routers.Router({
      $rootEl: $('#content'),
      photos: new Bickr.Collections.Photos(),
      users: new Bickr.Collections.Users(),
      albums: new Bickr.Collections.Albums(),
    });
    $('body').addClass('backbone');
    Backbone.history.start();
  }
};
