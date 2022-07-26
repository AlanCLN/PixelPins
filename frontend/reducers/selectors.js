export const filterUserPins = (state, userId) => {
    let result = [];

    if (!state.entities.users[userId]?.pins) {
        return null
    }
    const userPins = state.entities.users[userId].pins
    userPins.forEach(pinId => {
        result.push(state.entities.pins[pinId])
    })
    return result;
}

export const filterUserBoards = (state, userId) => {
    let result = [];

    if (!state.entities.users[userId]?.boards) {
        return null
    }
    const userBoards = state.entities.users[userId].boards
    userBoards.forEach(boardId => {
        result.push(state.entities.boards[boardId])
    })
    return result;
}

export const filterUserSavedPins = (state, userId) => {
    let result = [];

    if (!state.entities.users[userId]?.savedPins) {
        return null
    }
    const userSavedPins = state.entities.users[userId].savedPins
    userSavedPins.forEach(pinId => {
        result.push(state.entities.pins[pinId])
    })
    return result;
}

export const filterBoardPins = (state, boardId) => {
    let result = [];

    if (!state.entities.boards[boardId]?.pins) {
        return null
    }
    const boardPins = state.entities.boards[boardId].pins
    boardPins.forEach(pinId => {
        result.push(state.entities.pins[pinId])
    })
    return result;
}

export const filterUserFollowers = (state, userId) => {
    let result = [];

    if (!state.entities.users[userId]?.followers) {
        return null
    }
    const userFollowers = state.entities.users[userId].followers
    userFollowers.forEach(id => {
        result.push(state.entities.users[id])
    })
    return result;
}

export const filterUserFollowings = (state, userId) => {
    let result = [];

    if (!state.entities.users[userId]?.followings) {
        return null
    }
    const userFollowings = state.entities.users[userId].followings
    userFollowings.forEach(id => {
        result.push(state.entities.users[id])
    })
    return result;
}