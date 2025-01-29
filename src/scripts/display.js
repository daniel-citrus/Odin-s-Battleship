const boards = document.querySelector('.boards');
const currentPlayer = document.querySelector('.currentPlayer');
const playerBoard = document.getElementById('current');
const hitBoard = document.getElementById('opponent');
const placementBoard = document.getElementById('placement');

const startMenu = document.querySelector('form.startMenu');
const gamemodes = startMenu.querySelectorAll('.mode input');
const difficultyOption = startMenu.querySelector('.difficulty');
const startButton = startMenu.querySelector('button');

const gameoverPopUp = document.querySelector('.gameover');
const winnerText = document.getElementById('winner');
const restartButton = gameoverPopUp.querySelector('button.restart');
const exitButton = gameoverPopUp.querySelector('button.exit');

import * as brain from './index';

gamemodes.forEach((mode) => {
    mode.addEventListener('click', () => {
        if (mode.value === 'player') {
            difficultyOption.classList.add('hidden');
        } else {
            difficultyOption.classList.remove('hidden');
        }
    });
});

restartButton.addEventListener('click', () => {
    restartGame();
});

exitButton.addEventListener('click', () => {
    exitGame();
});

function exitGame() {
    gameoverPopUp.classList.add('hidden');
    startMenu.classList.remove('hidden');
    currentPlayer.classList.add('hidden');
    boards.classList.add('hidden');
}

function restartGame() {
    gameoverPopUp.classList.add('hidden');
    brain.startGame(
        localStorage.getItem('mode'),
        localStorage.getItem('difficulty')
    );
    startGame();
}

startButton.addEventListener('click', () => {
    const mode = startMenu.querySelector('.mode input:checked').value;
    const diff = startMenu.querySelector('.difficulty input:checked').value;
    localStorage.setItem('mode', mode);
    localStorage.setItem('difficulty', diff);

    brain.startGame(mode, diff);
    startGame();
});

export function startGame() {
    startMenu.classList.add('hidden');
    currentPlayer.classList.remove('hidden');
    boards.classList.remove('hidden');
}

export function buildBoard(boardArray) {
    playerBoard.textContent = '';

    for (let row in boardArray) {
        for (let col in boardArray[row]) {
            const coords = boardArray[row][col];
            const cell = buildCell(row, col, cellStatus(coords));
            cell.dataset.ship = coords.ship.name;
            playerBoard.appendChild(cell);
        }
    }
}

export function buildHitBoard(boardArray) {
    hitBoard.textContent = '';

    for (let row in boardArray) {
        for (let col in boardArray[row]) {
            const coords = boardArray[row][col];
            const cell = buildCell(row, col, cellStatus(coords));

            cell.addEventListener('click', () => {
                attackCell(x, y);
            });

            hitBoard.appendChild(cell);
        }
    }
}

export function buildPlacementBoard(boardArray, highlightLength = 1) {
    placementBoard.textContent = '';
    placementBoard.dataset.highlightLength = highlightLength;

    for (let row in boardArray) {
        for (let col in boardArray[row]) {
            const coords = boardArray[row][col];
            const cell = buildCell(row, col, cellStatus(coords));

            cell.addEventListener('mouseover', () => {
                highlightShip(row, col, highlightLength, 'vertical');
            });

            cell.addEventListener('mouseout', () => {
                unhighlightShip(row, col, highlightLength, 'vertical');
            });

            cell.addEventListener('click', () => {
                // place ship
            });

            placementBoard.appendChild(cell);
        }
    }
}

function buildPlacementCell() {}

/**
 * Using the starting coordinates, highlight cells occupied by ship.
 * @param {*} x
 * @param {*} y
 * @param {*} length
 */
function highlightShip(x, y, length, orientation = 'vertical') {
    for (let i = 0; i < length; i++) {
        let query;

        if (orientation === 'vertical') {
            query = `[data-x="${+x + i * 1}"][data-y="${y}"]`;
        } else {
            query = `[data-x="${x}"][data-y="${+y + i * 1}"]`;
        }

        const cell = placementBoard.querySelector(query);

        console.log(cell);
        cell.classList.add('highlight');
    }
}

function unhighlightShip(x, y, length, orientation = 'vertical') {
    for (let i = 0; i < length; i++) {}
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

/**
 *
 * @param {*} x
 * @param {*} y
 * @param {*} type [display, hit, placement]
 * @param {*} status
 * @returns
 */
function buildCell(x, y, status = 'unhit') {
    const cell = document.createElement('div');

    cell.classList.add('cell');
    cell.dataset.x = x;
    cell.dataset.y = y;
    cell.dataset.status = status;

    return cell;
}

// Cell to place new ships
function placementCell() {
    console.log('place ship');
}

export function attackCell(x, y) {
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

export function gameover(winner) {
    boards.classList.add('hidden');
    gameoverPopUp.classList.remove('hidden');
    winnerText.textContent = winner;
}

function getCell(x, y) {
    return hitBoard.querySelector(`.cell[data-x='${x}'][data-y='${y}']`);
}

export function resetBoard() {
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
export function setCurrentPlayer(player) {
    currentPlayer.textContent = player;
}

export function toggleHitBoard(disable = false) {
    if (disable) {
        hitBoard.classList.add('disabled');
    } else {
        hitBoard.classList.remove('disabled');
    }
}
