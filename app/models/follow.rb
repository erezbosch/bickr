class Follow < ActiveRecord::Base
  validates :followee, :follower, presence: true
  validates :followee_id, uniqueness: { scope: :follower_id }
  validate :follower_not_followee
  belongs_to :follower, class_name: 'User'
  belongs_to :followee, class_name: 'User'

  def follower_not_followee
    errors.add(:users, "can't follow themselves") if follower_id == followee_id
  end
end
