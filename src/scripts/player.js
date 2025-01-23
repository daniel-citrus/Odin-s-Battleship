/* const Gameboard = require('./gameboard'); */
import Gameboard from './gameboard';
import * as bot from './bot';

class Player {
    constructor() {
        this.type = 'player';
        this.board = new Gameboard();
    }
}

class Computer extends Player {
    constructor(difficulty) {
        super();
        this.hits = []; // coordinates of ship hits
        this.misses = []; // coordinates of misses
        this.type = 'computer';
        this.difficulty = difficulty;
    }

    attack(opponent) {
        return bot.attack(opponent, this.difficulty);
    }
}

export { Player, Computer };
/* module.exports = { Player, Computer }; */
