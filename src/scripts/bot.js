function randomAttack() {
    const board = this.board.board;
    const dim = board.length;

    let x, y;

    do {
        x = this.#getRandomInt(dim);
        y = this.#getRandomInt(dim);
    } while (board[x][y].hit);

    console.log(x, y);
}

functionmartAttack() {}