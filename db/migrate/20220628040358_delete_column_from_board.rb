class DeleteColumnFromBoard < ActiveRecord::Migration[5.2]
  def change
    remove_column :boards, :description
  end
end
