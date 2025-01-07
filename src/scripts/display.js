const currentPlayer = document.querySelector('.currentPlayer');
const playerBoard = document.getElementById('current');
const hitBoard = document.getElementById('opponent');

const currentLose = document.querySelector('#current+button');
const otherLose = document.querySelector('#opponent+button');

export {
    attackCell,
    buildBoard,
    buildHitBoard,
    resetBoard,
    setCurrentPlayer,
    gameover,
};
import * as brain from './index';

currentLose.addEventListener('click', () => {
    brain.currentLose();
});
otherLose.addEventListener('click', () => {
    brain.otherLose();
});

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

function attackCell(x, y) {
    const result = brain.attack(x, y);

    /* if (result === false) {
        console.log('miss');
    } else if (result === null) {
        console.log('already hit');
    } else {
        console.log('hit');
    } */

    if (!result) {
        return;
    }

    const cell = getCell(x, y);
    cell.dataset.status = 'hit';
}

function gameover(winner) {
    console.log(`${winner} has won!`);
}

function getCell(x, y) {
    return hitBoard.querySelector(`.cell[data-x='${x}'][data-y='${y}']`);
}

function resetBoard() {
    const cells = document.querySelectorAll(`.board .cell`);

    for (let cell of cells) {
        cell.dataset.status = 'unhit';
        cell.dataset.ship = false;
    }
}

/**
 * Update text content of current player element
 * @param {string} player
 */
function setCurrentPlayer(player) {
    currentPlayer.textContent = player;
}
