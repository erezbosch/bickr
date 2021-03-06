class User < ActiveRecord::Base
  validates :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  before_validation :ensure_session_token

  has_many :albums, foreign_key: :creator_id, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many(
    :liked_photos,
    through: :likes,
    source: :likable,
    source_type: 'Photo'
  )
  has_many(
    :liked_albums,
    through: :likes,
    source: :likable,
    source_type: 'Album'
  )
  has_many(
    :out_follows,
    foreign_key: :follower_id,
    class_name: 'Follow',
    dependent: :destroy
  )
  has_many(
    :in_follows,
    foreign_key: :followee_id,
    class_name: 'Follow',
    dependent: :destroy
  )
  has_many :photos, foreign_key: :uploader_id, dependent: :destroy
  has_many :followees, through: :out_follows
  has_many :followers, through: :in_follows
  has_many :followee_photos, through: :followees, source: :photos
  has_many :follower_photos, through: :followers, source: :photos

  attr_reader :password

  def out_follows_hash
    zipped_follows = out_follows.pluck(:followee_id).zip(out_follows)
    zipped_follows.each_with_object({}) do |(id, follow), out_follows_hash|
      out_follows_hash[id] = follow
    end
  end

  def likes_hash
    zipped_likes = likes.pluck(:likable_type, :likable_id).zip(likes)
    hash = Hash.new { |h, k| h[k] = {} }
    zipped_likes.each_with_object(hash) do |((type, id), like), likes_hash|
      likes_hash[type][id] = like
    end
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = generate_session_token
    save!
    session_token
  end

  private
  def ensure_session_token
    self.session_token ||= generate_session_token
  end
end
