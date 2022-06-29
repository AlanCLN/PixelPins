json.extract! @board, :id, :name, :user_id

pins_array = []
@board.pins.each do |pin|
    pins_array << pin.id
end
json.pins pins_array