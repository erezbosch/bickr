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
    var nav = new Bickr.Views.Nav();
    nav.render();
    $('#nav').html(nav.$el);
    Backbone.history.start();
  }
};
