module Likable
  extend ActiveSupport::Concern
  included { has_many :likes, as: :likable, dependent: :destroy }

  def num_likes
    likes.length
  end
end
