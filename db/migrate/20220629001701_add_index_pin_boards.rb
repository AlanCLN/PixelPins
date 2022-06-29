class AddIndexPinBoards < ActiveRecord::Migration[5.2]
  def change
    add_index :pin_boards, [:pin_id, :board_id], unique: true
  end
end
