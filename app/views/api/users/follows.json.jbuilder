json.array! @users do |user|
    json.extract! user, :id, :username

    pins_array = []
    user.pins.each do |pin|
        pins_array << pin.id
    end
    json.pins pins_array

    boards_array = []
    user.boards.each do |board|
        boards_array << board.id
    end
    json.boards boards_array

    saved_pins_array = []
    user.saved_pins.each do |pin|
        saved_pins_array << pin.id
    end
    json.saved_pins saved_pins_array

    followers_array = []
    user.followers.each do |follower|
        followers_array << follower.id
    end
    json.followers followers_array

    followings_array = []
    user.followings.each do |following|
        followings_array << following.id
    end
    json.followings followings_array
end