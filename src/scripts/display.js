const body = document.querySelector('body');
const playerBoard = document.getElementById('current');
const hitBoard = document.getElementById('opponent');

export { buildBoard, attackCell, populateBoard, resetBoard };

function buildBoard(dim = 10) {
    for (let row = 0; row < dim; row++) {
        for (let col = 0; col < dim; col++) {
            playerBoard.appendChild(buildCell(row, col, false));
            hitBoard.appendChild(buildCell(row, col, true));
        }
    }
}

function buildCell(x, y, hit = false) {
    const cell = document.createElement('div');

    cell.classList.add('cell');
    cell.dataset.x = x;
    cell.dataset.y = y;
    cell.dataset.hit = false;
    cell.dataset.ship = false;

    if (hit) {
        cell.addEventListener('click', () => {
            attackCell(cell);
        });
    }

    return cell;
}

function attackCell(cell) {
    cell.dataset.hit = true;
}

/**
 * Display current players board
 * @param {array} player
 */
function populateBoard(player, opponent) {
    for (let row in player) {
        for (let col in player) {
            if (!player[row][col].ship) {
                continue;
            }

            const ship = player[row][col].ship;
            let cell = playerBoard.querySelector(
                `div[data-x='${row}'][data-y='${col}']`
            );

            cell.dataset.ship = ship.name;

            cell = hitBoard.querySelector(
                `div[data-x='${row}'][data-y='${col}']`
            );
        }
    }
}

/**
 * Diplay current player's hitboard
 */

function resetBoard() {
    const cells = document.querySelectorAll(`.board .cell`);

    for (let cell of cells) {
        cell.dataset.hit = false;
        cell.dataset.ship = false;
    }
}
