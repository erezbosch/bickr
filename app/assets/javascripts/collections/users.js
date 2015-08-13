Bickr.Collections.Users = Backbone.FetchableCollection.extend({
  model: Bickr.Models.User,
  url: '/api/users',
});
