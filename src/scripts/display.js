const body = document.querySelector('body');
const playerBoard = document.getElementById('current');
const hitBoard = document.getElementById('opponent');

export { buildBoard, populateBoards, resetBoard };
import * as brain from './index';

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
    cell.dataset.hit = null;

    if (hit) {
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
    if (result) {
        cell.dataset.hit = true;
    } else if (result === false) {
        cell.dataset.hit = false;
    } else {
        console.log('already hit');
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

/**
 * Display current player's board
 * @param {array} array
 */
function populatePlayerBoard(array) {}

/**
 * Display hitboard using opponents board
 * @param {array} array - other player's array
 */
function populateHitBoard(array) {}

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
