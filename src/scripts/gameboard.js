class Gameboard {
    constructor() {
        this.board = this.#createBoard();
    }

    getBoard() {
        return this.board;
    }

    attack(x, y) {
        const cell = this.board[x][y];

        if (cell.hit) {
            return false;
        }

        // hit the ship

        return true;
    }

    #createBoard(size = 10) {
        const board = [];

        for (let x = 0; x < size; x++) {
            const row = [];
            for (let y = 0; y < size; y++) {
                row.push({
                    ship: null,
                    hit: false,
                });
            }
            board.push(row);
        }

        return board;
    }
}

module.exports = Gameboard;
