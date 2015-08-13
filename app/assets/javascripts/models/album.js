Bickr.Models.Album = Backbone.Model.extend({
  urlRoot: '/api/albums',

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
    return payload;
  },
});
