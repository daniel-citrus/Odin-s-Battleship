/* const Gameboard = require('./gameboard'); */
import Gameboard from "./gameboard";

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
}

export { Player, Computer };
/* module.exports = { Player, Computer }; */
