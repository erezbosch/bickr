Bickr.Collections.Photos = Backbone.FetchableCollection.extend({
  model: Bickr.Models.Photo,
  url: '/api/photos',
  comparator: function (photo) {
    return -photo.get('id');
  },
});
