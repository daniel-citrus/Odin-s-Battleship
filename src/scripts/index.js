import '../style/style.scss';
import * as display from './display';
import { Player } from './player';

display.buildBoard();
const player = new Player();
const opponent = new Player();
player.board.randomizeBoard();
opponent.board.randomizeBoard();
display.populateBoards(player.board.board);

export function attack(x, y) {
    return player.board.attack(x, y);
}

// game loop
// set current player: 1
// attack player 2
// check if all ships on player 2 have been sunk
// if all sunk, player 1 wins
// else switch current player
// if mode is 'computer,' auto attack for computer

function startGame() {}
function playerWins() {}
