Bickr.Views.PhotoShow = Backbone.CompositeView.extend({
  template: JST['photos/photo_show'],
  className: 'photo-show-container',

  events: {
    'click .delete': 'delete',
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.addSubview(
      '.like-container',
      new Bickr.Views.Like({ model: this.model })
    );
    this.addSubview(
      ".comments-index",
      new Bickr.Views.CommentsIndex({ model: this.model })
    );
  },

  delete: function () {
    this.model.destroy();
    this.remove();
    window.history.back();
  },

  render: function () {
    this.$el.html(this.template({ photo: this.model }));
    if (this.model.get('public_id')) {
      var $image = $.cloudinary.image(this.model.get('public_id'), {
        width: Math.floor(window.innerWidth * (5 / 6)),
        height: Math.floor(window.innerHeight - 350),
        crop: 'limit',
      });
      var $link = $('<a>').attr('href', '/photos/' + this.model.id)
                          .attr('target', '_blank')
                          .addClass('photo-link');
      this.$('#photo').append($link.append($image));
    }
    this.attachSubviews();
  },
});
