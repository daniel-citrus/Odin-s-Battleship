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

function startGame() {}
function gameover() {}

function otherPlayer() {
    return currentPlayer === 0 ? 1 : 0;
}

export function attack(x, y) {
    return player.board.attack(x, y);
}
