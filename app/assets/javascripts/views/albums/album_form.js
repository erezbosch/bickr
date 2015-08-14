Bickr.Views.AlbumForm = Backbone.CompositeView.extend({
  template: JST['albums/album_form'],

  events: {
    'click .submit': 'addAlbum',
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.addSubview(
      ".tags",
      new Bickr.Views.Tags({ collection: this.model.tags() })
    );
    this.addSubview(
      ".tag-form",
      new Bickr.Views.TagForm({ model: this.model })
    );
  },

  addAlbum: function (e) {
    e.preventDefault();
    var data = this.$('form').serializeJSON().album;
    var tagData = this.model.tags().map(function (tag) {
       return tag.attributes;
    });
    $.extend(data, { tags: tagData });
    var that = this;
    this.model.save(data, {
      success: function () {
        that.collection.add(that.model);
        Backbone.history.navigate(
          'api/albums/' + that.model.id,
          { trigger: true}
        );
      },

      error: function (model, response) {
        that.$('.form-errors').empty();
        JSON.parse(response.responseText).forEach(function (errorText) {
          that.$('.form-errors').append('<li>' + errorText + '</li>');
        });
      },
    });
  },

  render: function () {
    this.$el.html(this.template({ album: this.model }));
    this.attachSubviews();
  },
});
