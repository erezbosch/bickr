Bickr.Views.PhotoForm = Backbone.View.extend({
  template: JST['photos/photo_form'],

  events: {
    'click .submit': 'addPhoto',
    'click .upload': 'upload',
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  upload: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function (error, result) {
      var data = result[0];
      debugger;
      this.model.set({ image_url: data.url, public_id: data.public_id });
    });
  },

  addPhoto: function (e) {
    e.preventDefault();
    var data = this.$('form').serializeJSON();
    this.model.save(data, {
      success: function () {
        this.collection.add(this.model);
        Backbone.history.navigate(
          'api/photos/' + this.model.id,
          { trigger: true}
        );
      }.bind(this),

      error: function (model, response) {
        this.$('.form-errors').empty();
        JSON.parse(response.responseText).forEach(function (errorText) {
          this.$('.form-errors').append('<li>' + errorText + '</li>');
        });
      }.bind(this),
    });
  },

  render: function () {
    this.$el.html(this.template({ photo: this.model }));
  },
});
