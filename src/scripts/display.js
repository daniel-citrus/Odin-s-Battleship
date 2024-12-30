const currentPlayer = document.querySelector('.currentPlayer');
const playerBoard = document.getElementById('current');
const hitBoard = document.getElementById('opponent');

export {
    attackCell,
    buildBoard,
    buildHitBoard,
    getCell,
    resetBoard,
    setCurrentPlayer,
};
import * as brain from './index';

function buildBoard(boardArray) {
    playerBoard.textContent = '';

    for (let row in boardArray) {
        for (let col in boardArray[row]) {
            const coords = boardArray[row][col];
            const cell = buildCell(row, col, false, cellStatus(coords));
            cell.dataset.ship = coords.ship.name;
            playerBoard.appendChild(cell);
        }
    }
}

function buildHitBoard(boardArray) {
    hitBoard.textContent = '';

    for (let row in boardArray) {
        for (let col in boardArray[row]) {
            const coords = boardArray[row][col];
            const cell = buildCell(row, col, true, cellStatus(coords));
            hitBoard.appendChild(cell);
        }
    }
}

/**
 * @param {*} coords - board array cell object
 * @returns {string}
 */
function cellStatus(coords) {
    const hit = coords.hit;
    const ship = coords.ship ? true : false;

    if (hit === null) {
        return 'unhit';
    } else if (hit) {
        return ship ? 'hit' : 'miss';
    } else {
        return 'miss';
    }
}

function buildCell(x, y, attackable = false, status = 'unhit') {
    const cell = document.createElement('div');

    cell.classList.add('cell');
    cell.dataset.x = x;
    cell.dataset.y = y;
    cell.dataset.status = status;

    if (attackable) {
        cell.addEventListener('click', () => {
            attackCell(x, y);
        });
    }

    return cell;
}

function attackCell(cell) {
    const x = cell.dataset.x;
    const y = cell.dataset.y;

    const result = brain.attack(x, y);
    let cellStatus;

    // already hit
    if (result === null) {
        return;
    }

    if (result) {
        cellStatus = 'hit';
    } else {
        cellStatus = 'miss';
    }

    cell.dataset.status = cellStatus;
}

function getCell(x, y) {
    return document.querySelector(`.board .cell[data-x='${x}'][data-y='${y}']`);
}

function resetBoard() {
    const cells = document.querySelectorAll(`.board .cell`);

    for (let cell of cells) {
        cell.dataset.status = 'unhit';
        cell.dataset.ship = false;
    }
}

function setCurrentPlayer(player) {
    currentPlayer.textContent = player;
}
