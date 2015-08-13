class User < ActiveRecord::Base
  validates :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  before_validation :ensure_session_token

  has_many :photos, foreign_key: :uploader_id, dependent: :destroy
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
  has_many :followees, through: :out_follows, source: :followee
  has_many :followers, through: :in_follows, source: :follower

  attr_reader :password

  def follows?(other_user)
    out_follows.exists?(followee_id: other_user.id)
  end

  def followed_by?(other_user)
    in_follows.exists?(follower_id: other_user.id)
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
