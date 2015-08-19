module Commentable
  extend ActiveSupport::Concern
  included do
    has_many :comments, as: :commentable, dependent: :destroy
    has_many :commenters, through: :commentable, source: :user
  end

  def num_likes
    likes.size
  end
end
