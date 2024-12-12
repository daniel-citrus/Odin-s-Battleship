const Player = require('../scripts/player');
const Gameboard = require('../scripts/gameboard');

describe('player', () => {
    const player = new Player('player', new Gameboard());
    const computer = new Player('computer', new Gameboard());

    test('proper player types', () => {
        expect(player.type).toBe('player');
        expect(computer.type).toBe('computer');
    });
});
