Bickr.Models.User = Backbone.Model.extend({
  urlRoot: '/api/users',

  follow: function () {
    if (!this._follow) {
      this._follow = new Bickr.Models.Follow();
    }
    return this._follow;
  },

  parse: function (payload) {
    this.follow().set(payload.follow);
    delete payload.follow;
    return payload;
  },

  createFollow: function () {
    this.follow().save({ 'followee_id': this.id }, {
      success: function () {
        this.trigger('followtoggle');
      }.bind(this)
    });
  },

  destroyFollow: function () {
    this.follow().destroy({
      success: function (model) {
        model.unset('id');
        this.trigger('followtoggle');
      }.bind(this)
    });
  },

  toggleFollow: function () {
    if (this.follow().isNew()) {
      this.createFollow();
    } else {
      this.destroyFollow();
    }
  },
});
