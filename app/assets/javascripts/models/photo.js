Bickr.Models.Photo = Backbone.Model.extend({
  urlRoot: '/api/photos',

  tags: function () {
    if (!this._tags) {
      this._tags = new Bickr.Collections.Tags();
    }
    return this._tags;
  },

  parse: function (payload) {
    if (payload.tags) {
      this.tags().set(payload.tags);
      delete payload.tags;
    }
    return payload;
  }
});
