Bickr.Views.PhotoForm = Backbone.View.extend({
  template: JST['photos/photo_form'],

  events: {
    'click .submit': 'addPhoto',
    'click .upload': 'upload',
  },

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
    this.albums = options.albums;
  },

  upload: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function (error, result) {
      var data = result[0];
      this.model.set({ image_url: data.url, public_id: data.public_id });
      var image = $.cloudinary.image(data.public_id, {
        width: Math.floor(window.innerWidth * (2 / 3)),
        height: Math.floor(window.innerHeight - 150),
        crop: 'limit',
      });
      this.$('#preview').append(image);
    }.bind(this));
  },

  addPhoto: function (e) {
    e.preventDefault();
    var data = this.$('form').serializeJSON().photo;
    var that = this;
    this.model.save(data, {
      success: function () {
        that.collection.add(that.model);
        Backbone.history.navigate(
          'api/photos/' + that.model.id,
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
    this.$el.html(this.template({ photo: this.model, albums: this.albums }));
  },
});
