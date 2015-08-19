class Comment < ActiveRecord::Base
  validates :user, :commentable, presence: true
  validates :user, uniqueness: { scope: [:commentable_id, :commentable_type] }
  belongs_to :user
  belongs_to :commentable, polymorphic: true
end
