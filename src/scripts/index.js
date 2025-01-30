import '../style/style.scss';
import * as display from './display';
import { Computer, Player } from './player';

let currentPlayer = 0; // 0 = Player, 1 = Opponent
let gamemode; // computer or player
let player;
let opponent;
let players;
let difficulty;

startGame('computer', 'random');
display.startGame();

/* Development */
placeShips(player);
/**
 * Place ships on placement board
 * @param {*} player
 */
export function placeShips(player) {
    const shipTypes = player.board.shipTypes;

    const ships = [];

    for (let { length, name } of shipTypes.values()) {
        ships.push({ length, name });
    }

    display.buildPlacementBoard(player.board.board, ships);
}

export function addShip() {
    
}

/*  */

function refreshBoards() {
    display.setCurrentPlayer(`Player ${currentPlayer + 1}`);
    display.buildBoard(players[currentPlayer].board.board);
    display.buildHitBoard(players[otherPlayer()].board.board);
}

export function startGame(mode, diff) {
    player = new Player();
    opponent = new Computer(diff);
    players = [player, opponent];
    gamemode = mode;
    difficulty = diff;

    player.board.randomizeBoard();
    opponent.board.randomizeBoard();
    refreshBoards();
    display.toggleHitBoard(false);
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

export function attack(x, y) {
    const current = players[currentPlayer];
    const other = players[otherPlayer()];
    const status = other.board.attack(x, y);

    if (status) {
        if (other.board.allShipsDestroyed) {
            display.gameover(`Player ${currentPlayer + 1}`);
        }
    }
    // player missed
    else if (status === false) {
        refreshBoards();

        if (gamemode === 'computer') {
            computerAttack(other, current);

            if (current.board.allShipsDestroyed) {
                display.gameover(`Player ${otherPlayer() + 1}`);
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

async function computerAttack(computer, opponent) {
    let status = true;
    display.toggleHitBoard(true);

    while (status) {
        /* await delay(randomNumber(500, 1150)); */
        let { x, y } = computer.attack(opponent);
        status = opponent.board.attack(x, y);
        refreshBoards();
    }

    display.toggleHitBoard(false);
}
