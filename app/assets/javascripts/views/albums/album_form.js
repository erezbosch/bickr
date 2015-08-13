Bickr.Views.AlbumForm = Backbone.View.extend({
  template: JST['albums/album_form'],

  events: {
    'click .submit': 'addAlbum',
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  addAlbum: function (e) {
    e.preventDefault();
    var data = this.$('form').serializeJSON().album;
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
  },
});
