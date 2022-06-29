# == Schema Information
#
# Table name: boards
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Board < ApplicationRecord
    validates :name, :user_id, presence: true

    belongs_to :user,
    class_name: 'User',
    foreign_key: :user_id

    has_many :pinboard_relationships,
    class_name: 'PinBoard',
    foreign_key: :board_id,
    dependent: :destroy

    has_many :pins,
    through: :pinboard_relationships,
    source: :pin

    def add_pin(pin_id)
        pinboard_relationships.create(pin_id: pin_id)
    end

    def remove_pin(pin_id)
        pinboard_relationships.find_by(pin_id: pin_id).destroy
    end

    def has_pin?(pin)
        pins.include?(pin)
    end

end
