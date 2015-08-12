class Follow < ActiveRecord::Base
  validates :followee, :follower, presence: true
  validates :followee_id, uniqueness: { scope: :follower_id }
  belongs_to :follower, class_name: 'User'
  belongs_to :followee, class_name: 'User'
end
