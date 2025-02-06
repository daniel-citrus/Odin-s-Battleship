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
    let x, y;

    // scan each cell in board
    for (let y in board) {
        for (let x in board[y]) {
            const cell = board[x][y];
            const hit = cell.hit;
            const ship = cell.ship;
            let temp, tempHit;

            // if a cell is hit and has a ship, check surrounding cells
            if (!hit) {
                continue;
            }

            if (!ship) {
                continue;
            }

            // up y - 1
            temp = y - 1;
            /* tempHit =  */
            /* if (temp >= 0 && ) */
            // down y + 1
            // left x - 1
            // right x + 1
            // attack the first instance of an unhit cell
        }
    }

    // attack random cell

    return randomAttack(opponent);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
