Bickr.Views.Nav = Backbone.CompositeView.extend({
  template: JST['nav/nav'],
  tagName: 'header',

  events: {
    'dblclick .you': 'goToYou',
    'click .upload-avatar': 'uploadAvatar',
  },

  initialize: function () {
    this.addSubview(
      '.search-form',
      new Bickr.Views.Search()
    );
  },

  goToYou: function () {
    Backbone.history.navigate(
      '#/api/users/' + CURRENT_USER.id,
      { trigger: true }
    );
  },

  uploadAvatar: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function (error, result) {
      if (!result) { return; }
      var data = result[0];
      var currentUser = this.collection.getOrFetch(CURRENT_USER.id);
      currentUser.save({ avatar_url: data.url });
    }.bind(this));
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
  },
});
