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
        test('add ship in valid spots', () => {
            // add ships vertically
            // add ships horizontally
        });
        test('add ships in invalid spots', () => {
            // add ships vertically
            // add ships horizontally
        });

        test('clear board', () => {
            expect(board.isEmpty).toBe(false);
            board.clearShips();
            expect(board.isEmpty).toBe(true);
        });
    });

    test('attack coordinates', () => {
        expect(board.attack(2, 6)).toBe(true);
        expect(board.attack(2, 6)).toBe(false);
        expect(board.attack(6, 8)).toBe(true);
        expect(board.attack(6, 8)).toBe(false);
    });
});
