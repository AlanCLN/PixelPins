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

    belongs_to :uploader,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :uploader_id

end
