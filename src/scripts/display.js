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

startButton.addEventListener('click', () => {
    const mode = startMenu.querySelector('.mode input:checked').value;
    const diff = startMenu.querySelector('.difficulty input:checked').value;
    localStorage.setItem('mode', mode);
    localStorage.setItem('difficulty', diff);
    startMenu.classList.add('hidden');
    brain.initializeGame(mode, diff);
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

export function startGame() {
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

/**
 * Build a placement board that will allow the player to add each ship one-by-one to their board.
 * @param {object} boardArray - 2D array representing player board, used to display existing ships
 * @param {object} ships - array of ship objects [{type_id, name, length},...]
 */
export function buildPlacementBoard(boardArray, ships) {
    placementBoard.textContent = '';
    const ship = ships.shift();

    for (let row in boardArray) {
        for (let col in boardArray[row]) {
            const coords = boardArray[row][col];
            let cell = buildCell(row, col);

            if (coords.ship) {
                cell.dataset.ship = coords.ship.name;
            }

            placementBoard.appendChild(cell);

            // No more ships to add
            if (!ship) {
                brain.completePlacement();
                return;
            }

            cell.addEventListener('mouseover', () => {
                highlightShip(row, col, ship.length, true, true);
            });

            cell.addEventListener('mouseout', () => {
                highlightShip(row, col, ship.length, true, false);
            });

            cell.addEventListener('click', () => {
                if (!brain.addShip(+row, +col, ship.id, true)) {
                    return;
                }

                buildPlacementBoard(boardArray, ships);
            });
        }
    }
}

/**
 * * Using the starting coordinates, highlight (or unhighlight) cells occupied by ship.
 * @param {number} row
 * @param {number} col
 * @param {number} length
 * @param {boolean} vertical - ship orientation is vertical
 * @param {boolean} highlight
 */
function highlightShip(row, col, length, vertical, highlight) {
    for (let i = 0; i < length; i++) {
        let query;

        if (vertical) {
            query = `[data-x="${+row + i * 1}"][data-y="${col}"]`;
        } else {
            query = `[data-x="${row}"][data-y="${+col + i * 1}"]`;
        }

        try {
            const cell = placementBoard.querySelector(query);
            if (highlight) {
                cell.classList.add('highlight');
            } else {
                cell.classList.remove('highlight');
            }
        } catch (error) {
            /* console.error('Cell is out of bounds.'); */
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

/**
 *
 * @param {*} x
 * @param {*} y
 * @param {*} type [display, hit, placement]
 * @param {*} status [optional]
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
