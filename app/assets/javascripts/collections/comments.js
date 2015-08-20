Bickr.Collections.Comments = Backbone.FetchableCollection.extend({
  model: Bickr.Models.Comment,
  url: '/api/comments',
});
