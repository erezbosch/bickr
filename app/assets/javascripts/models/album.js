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

  parse: function (payload) {
    if (payload.photos) {
      this.photos().set(payload.photos);
      delete payload.photos;
    }
    if (payload.tags) {
      this.tags().set(payload.tags);
      delete payload.tags;
    }
    return payload;
  },
});
