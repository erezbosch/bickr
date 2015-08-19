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
    var that = this;
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function (error, result) {
      if (!result) { return; }
      var urlData = result[0].url;
      var currentUser = that.collection.getOrFetch(CURRENT_USER.id);
      currentUser.save({ avatar_url: urlData }, {
        success: function () {
          CURRENT_USER.avatarUrl = urlData;
          that.render();
        }
      });
    });
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
  },
});
