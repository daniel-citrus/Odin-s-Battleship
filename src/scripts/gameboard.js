/* const Ship = require('./ship'); */
import Ship from './ship';

class Gameboard {
    constructor() {
        /*
        this.board will contain a 2D array. Each element will be a cell object:
        {
            ship: false
            hit: null
        }
        
        board.ship: ship object or false (if no ship is present)
        board.hit:
             true - cell hit
            false - cell missed (no ship)
             null - cell unhit
        */
        this.board = this.#createBoard();
    }

    // 5 types of ships, each type denoted by map key
    shipTypes = new Map([
        [
            0,
            {
                length: 5,
                name: 'Carrier',
            },
        ],
        [
            1,
            {
                length: 4,
                name: 'Battleship',
            },
        ],
        [
            2,
            {
                length: 3,
                name: 'Cruiser',
            },
        ],
        [
            3,
            {
                length: 4,
                name: 'Submarine',
            },
        ],
        [
            4,
            {
                length: 2,
                name: 'Destroyer',
            },
        ],
    ]);

    get hasShips() {
        for (let row in this.board) {
            for (let col in this.board[row]) {
                if (this.board[row][col].ship !== false) {
                    return true;
                }
            }
        }

        return false;
    }

    // No ships on board or all ships are destroyed
    get allShipsDestroyed() {
        for (let row in this.board) {
            for (let col in this.board[row]) {
                if (
                    this.board[row][col].ship !== false &&
                    !this.board[row][col].hit
                ) {
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * Add ship to board if it fits on the given coordinates
     * @param {number} x board x coordinate
     * @param {number} y board y coordinate
     * @param {number} type_id ship type by number
     * @param {boolean} vertical vertical or horizontal placement
     */
    addShip(x, y, type_id, vertical) {
        const shipType = this.shipTypes.get(type_id);

        if (!shipType) {
            return false;
        }

        const length = shipType.length;
        const name = shipType.name;

        if (!this.#shipFits(x, y, length, vertical)) {
            return false;
        }

        const ship = new Ship(name, length);

        for (let i = 0; i < length; i++) {
            if (vertical) {
                this.board[x + i][y].ship = ship;
            } else {
                this.board[x][y + i].ship = ship;
            }
        }

        return true;
    }

    #shipFits(x, y, length, vertical) {
        const maxCoord = this.board.length - 1;
        if (vertical) {
            const endX = x + length - 1;
            if (endX > maxCoord) {
                return false;
            }
        } else {
            const endY = y + length - 1;

            if (endY > maxCoord) {
                return false;
            }
        }

        for (let i = 0; i < length; i++) {
            if (vertical) {
                if (this.board[x + i][y].ship) {
                    return false;
                }
            } else {
                if (this.board[x][y + i].ship) {
                    return false;
                }
            }
        }

        return true;
    }

    /**
     * Attack coordinates
     * @param {number} x
     * @param {number} y
     * @returns {*} true - successful attack, false - missed, null - already hit
     */
    attack(x, y) {
        const target = this.board[x][y];

        if (target.hit !== null) {
            return null;
        }

        this.board[x][y].hit = true;

        if (!target.ship) {
            return false;
        }

        target.ship.hit();
        return true;
    }

    clearShips() {
        const row = this.board.length;
        const col = this.board[0].length;

        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                this.board[r][c].ship = false;
                this.board[r][c].hit = null;
            }
        }
    }

    #createBoard(size = 10) {
        const board = [];

        for (let x = 0; x < size; x++) {
            const row = [];
            for (let y = 0; y < size; y++) {
                row.push({
                    ship: false,
                    hit: null,
                });
            }
            board.push(row);
        }

        return board;
    }

    getBoard() {
        return this.board;
    }

    // Unhit all cells on the board
    unhitAllCells() {
        for (let row in this.board) {
            for (let col in this.board[row]) {
                this.board[row][col].hit = null;
            }
        }
    }

    /**
     * Randomly place one instance of each available ship type on the board.
     */
    randomizeBoard() {
        for (const [id, ship] of this.shipTypes) {
            let x = this.#getRandomInt(this.board.length);
            let y = this.#getRandomInt(this.board.length);
            let orientation = this.#randomOrientation();

            while (!this.addShip(x, y, id, orientation)) {
                x = this.#getRandomInt(this.board.length);
                y = this.#getRandomInt(this.board.length);
                orientation = this.#randomOrientation();
            }
        }
    }

    #getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    #randomOrientation() {
        if (this.#getRandomInt(2)) {
            return 'horizontal';
        }

        return 'vertical';
    }
}

export default Gameboard;
/* module.exports = Gameboard; */
