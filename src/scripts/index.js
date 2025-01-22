import '../style/style.scss';
import * as display from './display';
import { Computer, Player } from './player';

let currentPlayer = 0; // 0 = Player, 1 = Opponent
let gamemode = 'player'; // computer or player
let player = new Player();
let opponent = new Computer();
const players = [player, opponent];

player.board.randomizeBoard();
opponent.board.randomizeBoard();

export function currentLose() {
    const p = players[currentPlayer];
    p.board.hitAllCells();
    refreshBoards();

    gameover(currentPlayer);
}
export function otherLose() {
    const p = players[otherPlayer()];
    p.board.hitAllCells();
    refreshBoards();

    gameover(otherPlayer());
}

refreshBoards();

function refreshBoards() {
    display.setCurrentPlayer(`Player ${currentPlayer + 1}`);
    display.buildBoard(players[currentPlayer].board.board);
    display.buildHitBoard(players[otherPlayer()].board.board);
}

/**
 * Declare player as the winner
 * @param {object} player
 */
function gameover(player) {
    console.log(player + 1);
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
    const status = players[otherPlayer()].board.attack(x, y);

    if (status) {
        if (players[otherPlayer()].board.allShipsDestroyed) {
            display.gameover(`Player ${currentPlayer + 1}`);
        }
    }
    // player attacked and missed
    else if (status === false) {
        refreshBoards();

        if (gamemode === 'computer') {
            computerAttack(players[otherPlayer()], players[currentPlayer]);
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
        await delay(randomNumber(500, 1150));
        let { x, y } = computer.randomAttack(opponent);
        status = opponent.board.attack(x, y);
        refreshBoards();

        // if computer won, gameover
    }

    display.toggleHitBoard(false);
}
