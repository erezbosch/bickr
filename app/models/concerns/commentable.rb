module Commentable
  extend ActiveSupport::Concern
  included do
    has_many :comments, as: :commentable, dependent: :destroy
    has_many :commenters, through: :commentable, source: :user
  end
end
