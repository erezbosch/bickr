window.Bickr = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Bickr.Routers.Router({
      $rootEl: $('#content'),
      photos: new Bickr.Collections.Photos()
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Bickr.initialize();
});
