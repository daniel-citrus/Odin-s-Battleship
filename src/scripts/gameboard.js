export class Gameboard {
    constructor() {
        this.board = this.#createBoard;
    }

    get board() {
        return this.board;
    }

    #createBoard(size = 10) {
        const board = [];

        for (let x = 0; x < size; x++) {
            const row = [];
            for (let y = 0; y < size; y++) {
                row.push([]);
            }
            board.push(row);
        }

        return board;
    }
}

module.exports = Gameboard;
