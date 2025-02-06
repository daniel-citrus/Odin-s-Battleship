export function attack(opponent, difficulty) {
    if (difficulty === 'random') {
        return randomAttack(opponent);
    } else {
        return smartAttack(opponent);
    }
}

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

    // scan each cell in board
    for (let x in board) {
        for (let y in board[x]) {
            const cell = board[x][y];
            const hit = cell.hit;
            const ship = cell.ship;

            if (!hit || !ship) {
                continue;
            }
            x = +x;
            y = +y;

            // check if x, y are within the dimensions of the game board
            // check if cell is hit
            let tempX, tempY;
            // up
            tempY = y - 1;
            if (tempY >= 0 && board[x][tempY].hit === null) {
                return { x, y: tempY };
            }
            // down
            tempY = y + 1;
            if (tempY < dim && board[x][tempY].hit === null) {
                return { x, y: tempY };
            }
            // left
            tempX = x - 1;
            if (tempX >= 0 && board[tempX][y].hit === null) {
                return { x: tempX, y };
            }
            // righti
            tempX = x + 1;
            if (tempX < dim && board[tempX][y].hit === null) {
                return { x: tempX, y };
            }
        }
    }

    // attack random cell

    return randomAttack(opponent);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
