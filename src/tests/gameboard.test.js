const Gameboard = require('../scripts/gameboard');

describe('gameboard', () => {
    const board = new Gameboard();

    test('combat', () => {
        expect(board.board.length).toBe(100);
        expect(board.board[0].length).toBe(100);
    });
});