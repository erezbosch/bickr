Bickr.Collections.Users = Backbone.Collection.extend({
  model: Bickr.Models.User,
  url: '/api/users',

  getOrFetch: function (id) {
    var user = this.get(id);
    if (!user) {
      user = new Bickr.Models.User({ id: id });
      this.add(user);
      user.fetch({ error: function () { this.remove(user); }.bind(this) });
    } else {
      user.fetch();
    }
    return user;
  },
});
