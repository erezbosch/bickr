Bickr.Models.Album = Backbone.Model.extend({
  urlRoot: '/api/albums',

  tags: function () {
    if (!this._tags) {
      this._tags = new Bickr.Collections.Tags();
    }
    return this._tags;
  },

  photos: function () {
    if (!this._photos) {
      this._photos = new Bickr.Collections.Photos();
    }
    return this._photos;
  },

  like: function () {
    if (!this._like) {
      this._like = new Bickr.Models.Like();
    }
    return this._like;
  },

  isLiked: function() {
    return !this.like().isNew();
  },

  parse: function (payload) {
    if (payload.photos) {
      this.photos().set(payload.photos);
      delete payload.photos;
    }
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
