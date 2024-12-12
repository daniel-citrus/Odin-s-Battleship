const Gameboard = require('../scripts/gameboard');

describe('gameboard', () => {
    const board = new Gameboard();

    describe('gameboard stats', () => {
        test('10 rows', () => {
            expect(board.getBoard().length).toBe(10);
        });
        test('10 columns', () => {
            expect(board.getBoard()[0].length).toBe(10);
        });
        test('all ships destroyed', () => {
            // add a ship
            expect(board.allShipsDestroyed()).toBe(false);
            board.hitAllShips();
            expect(board.allShipsDestroyed()).toBe(true);
        });
    });

    describe('add and remove ships', () => {
        test('clear board', () => {
            expect(board.hasShips).toBe(true);
            board.clearShips();
            expect(board.hasShips).toBe(false);
        });
        describe('in valid spots', () => {
            test('vertically', () => {});
            test('horizontally', () => {});
        });
        describe('in invalid spots', () => {
            test('vertically', () => {});
            test('horizontally', () => {});
        });
    });

    test('attack coordinates', () => {
        expect(board.attack(2, 6)).toBe(true);
        expect(board.attack(2, 6)).toBe(false);
        expect(board.attack(6, 8)).toBe(true);
        expect(board.attack(6, 8)).toBe(false);
    });
});
