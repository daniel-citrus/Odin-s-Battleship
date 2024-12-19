const Ship = require('./ship');
/* import Ship from './ship'; */

class Gameboard {
    constructor() {
        this.board = this.#createBoard();
    }

    // 5 types of ships, each type denoted by map key
    #shipTypes = new Map([
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
     * @param {*} x board x coordinate
     * @param {*} y board y coordinate
     * @param {*} type ship type by number
     * @param {*} direction vertical or horizontal placement
     */
    addShip(x, y, type, direction) {
        const shipType = this.#shipTypes.get(type);

        if (!shipType) {
            return false;
        }

        const length = shipType.length;
        const name = shipType.name;

        if (!this.#shipFits(x, y, length, direction)) {
            return false;
        }

        const ship = new Ship(name, length);

        for (let i = 0; i < length; i++) {
            if (direction === 'vertical') {
                this.board[x + i][y].ship = ship;
            } else if (direction === 'horizontal') {
                this.board[x][y + i].ship = ship;
            }
        }

        return true;
    }

    #shipFits(x, y, length, direction) {
        const maxCoord = this.board.length - 1;
        // depending on the direction, check if ship will go over the boundary
        if (direction === 'vertical') {
            const endX = x + length - 1;

            if (endX > maxCoord) {
                return false;
            }
        } else if (direction === 'horizontal') {
            const endY = y + length - 1;

            if (endY > maxCoord) {
                return false;
            }
        }

        return true;
    }

    /**
     * Attack coordinates
     * @param {*} x
     * @param {*} y
     * @returns true if cell has not been attacked yet
     */
    attack(x, y) {
        const target = this.board[x][y];

        if (target.hit) {
            return false;
        }

        if (target.ship !== false) {
            const ship = this.ships.get(target.ship);
            ship.hit();
        }

        this.board[x][y].hit = true;

        return true;
    }

    clearShips() {
        const row = this.board.length;
        const col = this.board[0].length;

        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                this.board[r][c].ship = false;
                this.board[r][c].hit = false;
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
                    hit: false,
                });
            }
            board.push(row);
        }

        return board;
    }

    getBoard() {
        return this.board;
    }

    // Sink all ships on the board
    hitAllShips() {
        for (let row in this.board) {
            for (let col in this.board[row]) {
                if (this.board[row][col].ship !== false) {
                    this.board[row][col].hit = true;
                }
            }
        }
    }
}

/* export default Gameboard; */
module.exports = Gameboard;
