import '../style/style.scss';
import * as display from './display';
import { Computer, Player } from './player';

let currentPlayer = 0; // 0 = Player, 1 = Opponent
let gamemode = 'player'; // computer or player
let player;
let opponent;
let players;
let difficulty = 'random';

/*  */
initializeGame('computer', 'clever');
/*  */

/**
 * Starts the game if both players have placed their ships, otherwise, allow remaining player to place ships.
 * @returns
 */
export function completePlacement() {
    if (gamemode === 'computer') {
        opponent.board.randomizeBoard();
        startGame(gamemode, difficulty);
        return;
    }

    // if current player is 1,
    if (currentPlayer === 1) {
        // switch players
        currentPlayer = otherPlayer();
        // start the game
        startGame(gamemode, difficulty);
        // return (2nd player has just been completed)
        return;
    }

    // switch players
    currentPlayer = otherPlayer();
    display.setCurrentPlayer(`Player ${currentPlayer + 1}`);
    // build placement board for current player
    placeShips();
}

/**
 * Allow player to place ships on their board using the placement board
 * @param {number} player - 0 or 1
 */
export function placeShips() {
    const shipTypes = players[currentPlayer].board.shipTypes;
    const ships = [];

    for (let id of Array.from(shipTypes.keys())) {
        const { length, name } = shipTypes.get(id);
        ships.push({ id, length, name });
    }

    display.buildPlacementBoard(players[currentPlayer].board.board, ships);
    display.placeShips();
}

/**
 * Add ship to current player's board
 * @param {number} x
 * @param {number} y
 * @param {number} id
 * @param {boolean} vertical - ship orientation is vertical
 * @returns {boolean} true if ship was added, false if not
 */
export function addShip(x, y, id, vertical) {
    const board = players[currentPlayer].board;
    return board.addShip(x, y, id, vertical);
}

function refreshBoards() {
    display.setCurrentPlayer(`Player ${currentPlayer + 1}`);
    display.buildBoard(players[currentPlayer].board.board);
    display.buildHitBoard(players[otherPlayer()].board.board);
}

export function initializeGame(mode, diff) {
    player = new Player();
    player.board.randomizeBoard();
    opponent = new Computer(diff);
    players = [player, opponent];
    gamemode = mode;
    difficulty = diff;
    /* placeShips(); */
    startGame();
}

/* Restart the game with the same settings */
export function restartGame() {
    currentPlayer = 0;
    player.board.clearShips();
    opponent.board.clearShips();
    placeShips();
}

export function startGame() {
    currentPlayer = 0;
    refreshBoards();
    display.toggleHitBoard(false);
    display.startGame();
}

/**
 * Declare player as the winner
 * @param {object} player
 */
function gameover(player) {
    display.toggleHitBoard(true);
    display.gameover(`Player ${player + 1}`);
}

function otherPlayer() {
    return currentPlayer === 0 ? 1 : 0;
}

function switchPlayers() {
    currentPlayer = otherPlayer();
    display.setCurrentPlayer(`Player ${currentPlayer + 1}`);
    display.buildBoard(players[currentPlayer].board.board);
    display.buildHitBoard(players[otherPlayer()].board.board);
}

/**
 * Attack the other player at cell {x, y}. Do nothing if attacking a cell that has already been hit.
 * @param {integer} x
 * @param {integer} y
 * @returns true - cell hit, false - cell missed (no ship), null - already hit
 */
export function attack(x, y) {
    const current = players[currentPlayer];
    const other = players[otherPlayer()];
    const status = other.board.attack(x, y);

    // direct hit on a ship
    if (status) {
        if (other.board.allShipsDestroyed) {
            gameover(currentPlayer);
        }
    }
    // player missed
    else if (status === false) {
        refreshBoards();

        if (gamemode === 'computer') {
            display.setCurrentPlayer('Computer');
            computerAttack(other, current);

            if (current.board.allShipsDestroyed) {
                gameover(otherPlayer());
            }
        } else {
            switchPlayers();
        }
    }

    return status;
}

const delay = (ms) => {
    return new Promise((res) => setTimeout(res, ms));
};

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Use a computer instance to attach opponent's board. Computer will continue to attach until it misses.
 * @param {object} computer - Player object
 * @param {object} opponent - Computer object
 */
async function computerAttack(computer, opponent) {
    let status = true;
    display.toggleHitBoard(true);

    while (status) {
        await delay(randomNumber(500, 1150));
        let { x, y } = computer.attack(opponent);

        status = opponent.board.attack(x, y);
        refreshBoards();
    }

    display.toggleHitBoard(false);
}
