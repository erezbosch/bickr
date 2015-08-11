Bickr.Collections.Photos = Backbone.Collection.extend({
  model: Bickr.Models.Photo,
  url: 'api/photos',

  getOrFetch: function (id) {
    var photo = this.get(id);
    if (!photo) {
      photo = new Bickr.Models.Photo({ id: id });
      this.add(photo);
      photo.fetch({ error: function () { this.remove(photo); }.bind(this) });
    } else {
      photo.fetch();
    }
    return photo;
  },
});
