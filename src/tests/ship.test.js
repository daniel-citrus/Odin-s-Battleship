const Ship = require('../scripts/ship');

describe('ship', () => {
    const ship = new Ship(5);

    test('methods', () => {
        expect(ship.length).toBe(5);
        expect(ship.hit()).toBe(true);
        expect(ship.length).toBe(4);
        expect(ship.sunk).toBe(false);
        expect(ship.hit()).toBe(true);
        expect(ship.hit()).toBe(true);
        expect(ship.hit()).toBe(true);
        expect(ship.hit()).toBe(true);
        expect(ship.hit()).toBe(false);
        expect(ship.sunk).toBe(true);
    });
});

const Gameboard = require('../scripts/gameboard');

describe('gameboard', () => {
    const board = new Gameboard();

    test('combat', () => {
        expect(board.board.length).toBe(100);
        expect(board.board[0].length).toBe(100);
    });
});
