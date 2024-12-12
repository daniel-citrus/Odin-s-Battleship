const Gameboard = require('../scripts/gameboard');

describe('gameboard', () => {
    const board = new Gameboard();

    test('combat arena size', () => {
        expect(board.getBoard().length).toBe(10);
        expect(board.getBoard()[0].length).toBe(10);
    });

    test('attach coordinates', () => {
        expect(board.attack(2, 6)).toBe(true);
    });
});
