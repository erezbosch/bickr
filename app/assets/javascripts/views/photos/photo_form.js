Bickr.Views.PhotoForm = Backbone.CompositeView.extend({
  template: JST['photos/photo_form'],

  events: {
    'click .submit': 'addPhoto',
    'click .upload': 'upload',
    'click .cancel': 'cancel',
  },

  initialize: function (options) {
    this.albums = options.albums;
    this.addSubview(
      ".tags",
      new Bickr.Views.Tags({ collection: this.model.tags() })
    );
    this.addSubview(
      ".tag-form",
      new Bickr.Views.TagForm({ model: this.model })
    );
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.albums, 'sync', this.render);
  },

  upload: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function (error, result) {
      if (!result) { return; }
      var data = result[0];
      debugger;
      if (this.$('.title-input').val() === "") {
        this.$('.title-input').val(this.parseAsTitle(data.original_filename));
      }
      this.model.set({ image_url: data.url, public_id: data.public_id });
      var image = $.cloudinary.image(data.public_id, {
        width: Math.floor(window.innerWidth * (1 / 2)),
        height: Math.floor(window.innerHeight - 450),
        crop: 'limit',
      });
      this.$('#preview').html(image);
    }.bind(this));
  },

  parseAsTitle: function (string) {
    var title = decodeURIComponent(string).split("");
    for (var i = 0; i < title.length; i++) {
      if (title[i] === "_" || title[i] === "-") { title[i] = " "; }
    }
    return title.join("");
  },

  addPhoto: function (e) {
    e.preventDefault();
    var data = this.$('form').serializeJSON().photo;
    var lastTag = this.$('.tag-form-input').val();
    if (lastTag && !this.model.tags().where({ label: lastTag }).length) {
      this.model.tags().add(new Bickr.Models.Tag({ label: lastTag }));
    }
    var tagData = this.model.tags().map(function (tag) {
       return tag.attributes;
    });
    $.extend(data, { tags: tagData });
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

  cancel: function (e) {
    e.preventDefault();
    var destination = this.model.isNew() ? '' : '#/api/photos/' + this.model.id;
    Backbone.history.navigate(destination, { trigger: true });
  },

  render: function () {
    this.$el.html(this.template({ photo: this.model, albums: this.albums }));
    this.attachSubviews();
    if (this.model.get('public_id')) {
      var image = $.cloudinary.image(this.model.get('public_id'), {
        width: Math.floor(window.innerWidth * (1 / 2)),
        height: Math.floor(window.innerHeight - 450),
        crop: 'limit',
      });
      this.$('#preview').append(image);
    }
  },
});
