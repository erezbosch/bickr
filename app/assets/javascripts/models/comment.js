Bickr.Models.Comment = Backbone.Model.extend({
  urlRoot: 'api/comments',

  comments: function () {
    if (!this._comments) {
      this._comments = new Bickr.Collections.Comments();
    }
    return this._comments;
  },

  parse: function (payload) {
    if (payload.comments) {
      this.comments().set(payload.comments, { parse: true });
      delete payload.comments;
    }
    return payload;
  }
});
