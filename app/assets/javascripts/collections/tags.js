Bickr.Collections.Tags = Backbone.FetchableCollection.extend({
  model: Bickr.Models.Tag,
  url: '/api/tags',
});
