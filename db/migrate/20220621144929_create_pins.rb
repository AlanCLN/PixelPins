class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      


      t.timestamps
    end
  end
end
