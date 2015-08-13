Backbone.FetchableCollection = Backbone.Collection.extend({
  getOrFetch: function (id, fetchOptions) {
    fetchOptions = fetchOptions || {};
    var model = this.get(id);
    if (!model) {
      model = new this.model({ id: id });
      this.add(model);
      model.fetch($.extend(
        fetchOptions,
        { error: function () { this.remove(model); }.bind(this) }
      ));
    } else {
      model.fetch(fetchOptions);
    }
    return model;
  },
});
