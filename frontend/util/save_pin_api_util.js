export const savePin = (pinId) => {
    return $.ajax({
        method: 'POST',
        url: 'api/saved_pins',
        data: { pin_id: pinId}
    })
}

export const unsavePin = (pinId) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/saved_pins/${pinId}`
    })
}

export const fetchUserSavedPins = (userId) => {
    return $.ajax({
        method: 'GET',
        url: 'api/saved_pins',
        data: { user_id: userId}

    })
}