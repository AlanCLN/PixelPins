json.partial! "api/users/user", user: @user

pins_array = []
@user.pins.each do |pin|
    pins_array << pin.id
end

json.pins pins_array