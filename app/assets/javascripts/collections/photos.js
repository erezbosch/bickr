Bickr.Collections.Photos = Backbone.FetchableCollection.extend({
  model: Bickr.Models.Photo,
  url: '/api/photos',
});
