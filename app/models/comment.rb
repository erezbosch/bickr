class Comment < ActiveRecord::Base
  include Commentable
  validates :user, :commentable, :body, presence: true
  belongs_to :user
  belongs_to :commentable, polymorphic: true
end
