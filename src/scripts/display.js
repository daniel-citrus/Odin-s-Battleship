const body = document.querySelector('body');
const playerBoard = document.getElementById('current');
const hitBoard = document.getElementById('opponent');

export { buildBoard, buildHitBoard, resetBoard };
import * as brain from './index';

function buildBoard(boardArray) {
    for (let row in boardArray) {
        for (let col in boardArray) {
            const ship = boardArray[row][col].ship;
            const hit = boardArray[row][col].hit;
            const cell = buildCell(row, col, false, hit);
            cell.dataset.ship = ship.name;
            playerBoard.appendChild(cell);
        }
    }
}

function buildHitBoard(boardArray) {
    const dim = boardArray.length;

    for (let row = 0; row < dim; row++) {
        for (let col = 0; col < dim; col++) {
            const coords = boardArray[row][col];
            const hit = coords.hit;
            const ship = coords.ship ? true : false;

            /* let cellStatus;

            if (hit === null) {
                cellStatus = null;
            } else if (hit) {
                cellStatus = ship ? true : false;
            } else {
                cellStatus = false;
            } */

            let cellStatus = hit === null ? null : hit && ship;

            const cell = buildCell(row, col, true, cellStatus);
            hitBoard.appendChild(cell);
        }
    }
}

function buildCell(x, y, attackable = false, hit = null) {
    const cell = document.createElement('div');

    cell.classList.add('cell');
    cell.dataset.x = x;
    cell.dataset.y = y;
    cell.dataset.hit = hit;

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

function resetBoard() {
    const cells = document.querySelectorAll(`.board .cell`);

    for (let cell of cells) {
        cell.dataset.hit = false;
        cell.dataset.ship = false;
    }
}
