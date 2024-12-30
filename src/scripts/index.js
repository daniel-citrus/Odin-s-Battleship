import '../style/style.scss';
import * as display from './display';
import { Computer, Player } from './player';

/*

initial setup
    display current player board
    display hit board (attacks opponent)
 
 attack hitboard
    update opponent board
    
    if direct hit
        check if all ships destroyed
            if yes
                current player wins
                return
    
    switch players
*/

let currentPlayer = 0; // 0 = Player, 1 = Opponent
let player = new Player();
let opponent = new Computer();
const players = [player, opponent];

player.board.randomizeBoard();
opponent.board.randomizeBoard();

/* startGame(); */

function startGame() {
    display.setCurrentPlayer(`Player ${currentPlayer + 1}`);
    display.buildBoard(players[currentPlayer].board.board);
    display.buildHitBoard(players[otherPlayer()].board.board);
}

function gameover() {}

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

    if (status === false) {
        console.log('switch players');
        switchPlayers();
    } else {
        return status;
    }
}
