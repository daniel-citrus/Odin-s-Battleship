function randomAttack(opponent) {
    const board = opponent.board.board;
    const dim = board.length;
    let x, y;

    do {
        x = getRandomInt(dim);
        y = getRandomInt(dim);
    } while (board[x][y].hit);

    return { x, y };
}

function smartAttack(opponent) {
    const board = opponent.board.board;
    const dim = board.length;
    let x, y;
}

export function attack(opponent, { difficulty, hits, misses }) {
    if (difficulty === 'random') {
        return randomAttack(opponent);
    } else {
        return smartAttack(opponent);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
