Bickr.Models.Photo = Backbone.Model.extend({
  urlRoot: '/api/photos',

  tags: function () {
    if (!this._tags) {
      this._tags = new Bickr.Collections.Tags();
    }
    return this._tags;
  },

  like: function() {
    if (!this._like) {
      this._like = new Bickr.Models.Like();
    }
    return this._like;
  },

  isLiked: function() {
    return !this.like().isNew();
  },

  parse: function (payload) {
    if (payload.tags) {
      this.tags().set(payload.tags);
      delete payload.tags;
    }
    if (payload.like) {
      this.like().set(payload.like);
      delete payload.like;
    }
    return payload;
  },
});
