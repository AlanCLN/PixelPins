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
require 'test_helper'

class SavedPinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
