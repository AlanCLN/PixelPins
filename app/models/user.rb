# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

    has_one_attached :photo

    has_many :pins,
    class_name: 'Pin',
    foreign_key: :uploader_id

    has_many :boards,
    class_name: 'Board',
    foreign_key: :user_id

    has_many :savedpin_relationships,
    class_name: 'SavedPin',
    foreign_key: :user_id

    has_many :saved_pins,
    through: :savedpin_relationships,
    source: :pin

    def save_pin(pin)
        savedpin_relationships.create(pin_id: pin.id)
    end

    def unsave_pin(pin)
        savedpin_relationships.find_by(pin_id: pin.id).destroy
    end

    def saved_pin?(pin)
        saved_pins.include?(pin)
    end

    has_many :active_friendships,
    class_name: 'Follow',
    foreign_key: :follower_id,
    dependent: :destroy

    has_many :passive_friendships,
    class_name: 'Follow',
    foreign_key: :followed_id,
    dependent: :destroy

    has_many :following,
    through: :active_friendships,
    source: :followed

    has_many :followers,
    through: :passive_friendships,
    source: :follower

    def follow(user)
        active_friendships.create(followed_id: user.id)
    end

    def unfollow(user)
        active_friendships.find_by(followed_id: user.id).destroy
    end

    def follow?(user)
        following.include?(user)
    end





    attr_reader :password
    after_initialize :ensure_session_token

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil if user.nil?

        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)

    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end
