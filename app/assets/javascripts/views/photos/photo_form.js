Bickr.Views.PhotoForm = Backbone.View.extend({
  template: JST['photo_form'],

  events: {
    'click .submit': 'addPhoto'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
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
