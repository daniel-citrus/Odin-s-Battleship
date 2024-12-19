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
        test('board matches', () => {
            expect(board.getBoard()).toEqual(board.getBoard());
        });

        test('all ships destroyed', () => {
            // add a ship
            board.addShip(2, 3, 0, 'vertical');
            expect(board.allShipsDestroyed).toBe(false);
            board.hitAllShips();
            expect(board.allShipsDestroyed).toBe(true);
        });
    });

    describe('add and remove ships', () => {
        beforeEach(() => {
            board.clearShips();
        });

        test('clear board', () => {
            board.addShip(2, 3, 0, 'vertical');
            expect(board.hasShips).toBe(true);
            board.clearShips();
            expect(board.hasShips).toBe(false);
        });
        describe('in valid spots', () => {
            // ship type 0 has length of 5
            test('vertically', () => {
                expect(board.addShip(3, 5, 0, 'vertical')).toBe(true);
                expect(board.addShip(4, 3, 0, 'vertical')).toBe(true);
            });
            test('horizontally', () => {
                expect(board.addShip(5, 2, 0, 'horizontal')).toBe(true);
                expect(board.addShip(3, 3, 0, 'horizontal')).toBe(true);
                expect(board.addShip(9, 4, 0, 'horizontal')).toBe(true);
            });
        });
        describe('in invalid spots', () => {
            test('beyond boundary', () => {
                expect(board.addShip(6, 3, 0, 'vertical')).toBe(false);
                expect(board.addShip(7, 6, 0, 'vertical')).toBe(false);
                expect(board.addShip(3, 7, 0, 'horizontal')).toBe(false);
                expect(board.addShip(3, 6, 0, 'horizontal')).toBe(false);
            });
            test('over ship', () => {
                board.addShip(2, 3, 0, 'vertical');
                board.addShip(5, 5, 0, 'horizontal');

                expect(board.addShip(3, 1, 2, 'horizontal')).toBe(false);
                expect(board.addShip(6, 0, 0, 'horizontal')).toBe(false);
                expect(board.addShip(0, 3, 0, 'vertical')).toBe(false);
            });
        });
    });

    test('attack coordinates', () => {
        expect(board.attack(2, 6)).toBe(true);
        expect(board.attack(2, 6)).toBe(false);
        expect(board.attack(6, 8)).toBe(true);
        expect(board.attack(6, 8)).toBe(false);
    });
});
