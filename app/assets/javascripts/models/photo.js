Bickr.Models.Photo = Backbone.Model.extend({
  urlRoot: '/api/photos',

  tags: function () {
    if (!this._tags) {
      this._tags = new Bickr.Collections.Tags();
    }
    return this._tags;
  },

  comments: function () {
    if (!this._comments) {
      this._comments = new Bickr.Collections.Comments();
    }
    return this._comments;
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
    if (payload.comments) {
      this.comments().set(payload.comments, { parse: true });
      delete payload.comments; 
    }
    if (payload.like) {
      this.like().set(payload.like);
      delete payload.like;
    }
    return payload;
  },
});
