# == Schema Information
#
# Table name: pins
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string
#  uploader_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Pin < ApplicationRecord
    validates :title, :uploader_id, presence: true;
    validate :ensure_image

    has_one_attached :image

    def ensure_image
        unless self.image.attached?
            errors[:image] << "must be attached"
        end
    end

    belongs_to :uploader,
    class_name: 'User',
    foreign_key: :uploader_id

    has_many :pinboard_relationships,
    class_name: 'PinBoard',
    foreign_key: :pin_id,
    dependent: :destroy

    has_many :boards,
    through: :pinboard_relationships,
    source: :board

    def pin_to_board(board)
        pinboard_relationships.create(board_id: board.id)
    end

    def unpin_from_board(board)
        pinboard_relationships.find_by(board_id: board.id).destroy
    end

    def pin_on_board?(board)
        boards.include?(board)
    end

    has_many :savedpin_relationships,
    class_name: 'SavedPin',
    foreign_key: :pin_id,
    dependent: :destroy

    has_many :saved_by_users,
    through: :savedpin_relationships,
    source: :user

end
