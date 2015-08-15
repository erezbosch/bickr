Bickr.Views.Like = Backbone.View.extend({
  template: JST['likes/like'],

  events: {
    'click button': 'toggleLike'
  },

  initialize: function () {
    this.listenTo(this.model, 'change:numLikes', this.render);
  },

  toggleLike: function (e) {
    e.preventDefault();
    this.model.isLiked() ? this.unlike() : this.like();
  },

  like: function() {
    this.model.like().save({
      likable_id: this.model.id,
      likable_type: this.model instanceof Bickr.Models.Photo ? 'Photo' : 'Album'
    });
    this.model.set({ numLikes: this.model.get('numLikes') + 1 });
  },

  unlike: function() {
    this.model.like().destroy();
    this.model.like().clear();
    this.model.set({ numLikes: this.model.get('numLikes') - 1 });
  },

  render: function () {
    this.$el.html(this.template({ model: this.model }));
  },
});