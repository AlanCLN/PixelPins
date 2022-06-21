class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.string :title, null: false
      t.string :description
      t.integer :uploader_id, null: false

      t.timestamps
    end
    add_index :pins, :uploader_id
  end
end
