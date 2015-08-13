Bickr.Collections.Albums = Backbone.FetchableCollection.extend({
  model: Bickr.Models.Album,
  url: '/api/albums',
});
