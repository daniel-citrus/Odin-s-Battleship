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
    constructor() {
        super();
        this.hits = []; // coordinates of ship hits
        this.misses = []; // coordinates of misses
        this.type = 'computer';
    }

    randomAttack(opponent) {
        return bot.randomAttack(opponent);
    }

    smartAttack(opponent) {
        return bot.smartAttack(opponent);
    }
}

export { Player, Computer };
/* module.exports = { Player, Computer }; */
