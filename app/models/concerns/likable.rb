module Likable
  extend ActiveSupport::Concern
  included do
    has_many :likes, as: :likable, dependent: :destroy
    has_many :likers, through: :likes, source: :user
  end

  def num_likes
    likes.size
  end
end
