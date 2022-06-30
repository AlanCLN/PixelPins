export const fetchPinsOnBoard = (boardId) => {
    return $.ajax({
        method: 'GET',
        url: 'api/pin_boards',
        data: { board_id: boardId}
    })
}

export const pinToBoard = (boardId, pinId) => {
    return $.ajax({
        method: 'POST',
        url: 'api/pin_boards',
        data: { board_id: boardId, pin_id: pinId}
    })
}

export const unpinFromBoard = (boardId, pinId) => {
    return $.ajax({
        method: 'DELETE',
        url: 'api/pin_boards/1',
        data: { board_id: boardId, pin_id: pinId}
    })
}