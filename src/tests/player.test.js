const { Player, Computer } = require('../scripts/player');
const Gameboard = require('../scripts/gameboard');

describe('player', () => {
    const player = new Player();
    const computer = new Computer();
    let testBoard;

    beforeEach(() => {
        testBoard = new Gameboard();
        expect(testBoard.addShip(3, 2, 2, 'verticalgit')).toBe(true);
    });

    describe('methods', () => {
        test('attack tile', () => {});
    });

    describe('properties', () => {
        test('type', () => {
            expect(player.type).toBe('player');
            expect(computer.type).toBe('computer');
        });
    });
});
