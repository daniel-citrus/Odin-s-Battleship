const Ship = require('../scripts/ship');

describe('ship', () => {
    const ship = new Ship(5);

    test('methods', () => {
        expect(ship.length).toBe(5);
        expect(ship.hit()).toBe(true);
        expect(ship.hasSunk).toBe(false);
        expect(ship.hit()).toBe(true);
        expect(ship.hit()).toBe(true);
        expect(ship.hit()).toBe(true);
        expect(ship.hit()).toBe(true);
        expect(ship.hit()).toBe(false);
        expect(ship.hasSunk).toBe(true);
    });
});
