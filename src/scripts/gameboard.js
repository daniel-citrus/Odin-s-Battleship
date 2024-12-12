const Ship = require('./ship');

class Gameboard {
    constructor() {
        this.board = this.#createBoard();
        this.ships = this.#createShips();
    }

    get hasShips() {
        for (let row in this.board) {
            for (let col in this.board[row]) {
                if (this.board[row][col].ship) {
                    return true;
                }
            }
        }

        return false;
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

        if (target.ship) {
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
                return this.board[r][c];
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

    #createShips() {
        const availableShips = [
            {
                id: 0,
                length: 5,
                name: 'Carrier',
            },
            {
                id: 1,
                length: 4,
                name: 'Battleship',
            },
            {
                id: 2,
                length: 3,
                name: 'Cruiser',
            },
            {
                id: 3,
                length: 4,
                name: 'Submarine',
            },
            {
                id: 4,
                length: 2,
                name: 'Destroyer',
            },
        ];

        const ships = new Map();

        for (let ship of availableShips) {
            const name = ship.name;
            const length = ship.length;
            const id = ship.id;

            ships.set(id, new Ship(name, length));
        }

        return ships;
    }

    getBoard() {
        return this.board;
    }
}

module.exports = Gameboard;
