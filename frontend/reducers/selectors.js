export const filterUserPins = (state, userId) => {
    let result = [];
    // pins_array = Object.values(state.entities.pins);
    if (!state.entities.users[userId].pins) {
        return null
    }
    const userPins = state.entities.users[userId].pins
    userPins.forEach(pinId => {
        result.push(state.entities.pins[pinId])
    })
    return result;
}