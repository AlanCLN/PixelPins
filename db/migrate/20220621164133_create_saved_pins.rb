class CreateSavedPins < ActiveRecord::Migration[5.2]
  def change
    create_table :saved_pins do |t|
      t.integer :user_id, null: false
      t.integer :pin_id, null: false
      t.timestamps
    end
    add_index :saved_pins, :user_id
    add_index :saved_pins, :pin_id
  end
end
