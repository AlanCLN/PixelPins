# == Schema Information
#
# Table name: saved_pins
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  pin_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class SavedPin < ApplicationRecord
    validates :user_id, :pin_id, presence: true

    belongs_to :user,
    class_name: 'User',
    foreign_key: :user_id

    belongs_to :pin,
    class_name: 'Pin',
    foreign_key: :pin_id
end
