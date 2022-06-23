class AddIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :saved_pins, [:user_id, :pin_id], unique: true
  end
end
