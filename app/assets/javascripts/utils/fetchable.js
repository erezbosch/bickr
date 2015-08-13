Backbone.FetchableCollection = Backbone.Collection.extend({
  getOrFetch: function (id) {
    var model = this.get(id);
    if (!model) {
      model = new this.model({ id: id });
      this.add(model);
      model.fetch({ error: function () { this.remove(model); }.bind(this) });
    } else {
      model.fetch();
    }
    return model;
  },
});
