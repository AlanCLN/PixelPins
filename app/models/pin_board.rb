# == Schema Information
#
# Table name: pin_boards
#
#  id         :bigint           not null, primary key
#  pin_id     :integer          not null
#  board_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class PinBoard < ApplicationRecord
    validates :pin_id, :board_id, presence: true

    belongs_to :pin,
    class_name: 'Pin',
    foreign_key: :pin_id

    belongs_to :board,
    class_name: 'Board',
    foreign_key: :board_id
end
