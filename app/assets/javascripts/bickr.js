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
    });
    var nav = new Bickr.Views.Nav();
    nav.render();
    $('#nav').html(nav.$el);
    Backbone.history.start();
  }
};
