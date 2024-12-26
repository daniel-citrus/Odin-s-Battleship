const body = document.querySelector('body');
const playerBoard = document.getElementById('current');
const hitBoard = document.getElementById('opponent');

export { buildBoard, buildHitBoard, populateBoards, resetBoard };
import * as brain from './index';

function buildBoard(dim = 10) {
    for (let row = 0; row < dim; row++) {
        for (let col = 0; col < dim; col++) {
            playerBoard.appendChild(buildCell(row, col, false));
        }
    }
}

function buildHitBoard(boardArray) {
    const dim = boardArray.length;

    for (let row = 0; row < dim; row++) {
        for (let col = 0; col < dim; col++) {
            const cell = buildCell(row, col, true);
            console.log(boardArray[row][col]);
            hitBoard.appendChild(cell);
        }
    }
}

function buildCell(x, y, attackable = false) {
    const cell = document.createElement('div');

    cell.classList.add('cell');
    cell.dataset.x = x;
    cell.dataset.y = y;
    cell.dataset.hit = null;

    if (attackable) {
        cell.addEventListener('click', () => {
            attackCell(cell);
        });
    }

    return cell;
}

function attackCell(cell) {
    const x = cell.dataset.x;
    const y = cell.dataset.y;

    const result = brain.attack(x, y);

    // already hit
    if (result === null) {
        return;
    }

    if (result) {
        cell.dataset.hit = true;
    } else {
        cell.dataset.hit = false;
    }
}

/**
 * Display board using board array
 * @param {array} boardArray
 */
function populateBoards(boardArray, opponentArray) {
    for (let row in boardArray) {
        for (let col in boardArray) {
            if (!boardArray[row][col].ship) {
                continue;
            }

            const ship = boardArray[row][col].ship;
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

function resetBoard() {
    const cells = document.querySelectorAll(`.board .cell`);

    for (let cell of cells) {
        cell.dataset.hit = false;
        cell.dataset.ship = false;
    }
}
