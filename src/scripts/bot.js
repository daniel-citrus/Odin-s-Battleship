export function randomAttack(opponent) {
    const board = opponent.board.board;
    const dim = board.length;
    let x, y;

    do {
        x = getRandomInt(dim);
        y = getRandomInt(dim);
    } while (board[x][y].hit);

    return { x, y };
}

export function smartAttack() {}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
