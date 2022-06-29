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