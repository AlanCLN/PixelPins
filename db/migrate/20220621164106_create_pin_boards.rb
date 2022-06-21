class CreatePinBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :pin_boards do |t|
      t.integer :pin_id, null: false
      t.integer :board_id, null: false

      t.timestamps
    end
    add_index :pin_boards, :pin_id
    add_index :pin_boards, :board_id
  end
end
