class Like < ActiveRecord::Base
  validates :user, :likable, presence: true
  validates :user, uniqueness: { scope: [:likable_id, :likable_type] }
  belongs_to :user
  belongs_to :likable, polymorphic: true
end
