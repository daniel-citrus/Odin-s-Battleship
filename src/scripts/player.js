/* const Gameboard = require('./gameboard'); */
import Gameboard from './gameboard';

class Player {
    constructor() {
        this.type = 'player';
        this.board = new Gameboard();
    }
}

class Computer extends Player {
    constructor() {
        super();
        this.type = 'computer';
    }

    randomAttack() {
        const board = this.board.board;
        const dim = board.length;

        let x, y;

        do {
            x = this.#getRandomInt(dim);
            y = this.#getRandomInt(dim);
        } while (board[x][y].ship);

        console.log(board[x][y]);
    }

    smartAttack() {}

    #getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
}

export { Player, Computer };
/* module.exports = { Player, Computer }; */
