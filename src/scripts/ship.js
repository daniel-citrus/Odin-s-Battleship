class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
    }

    get hasSunk() {
        return this.hits >= this.length;
    }

    hit() {
        if (this.hasSunk) {
            return false;
        }

        this.hits++;
        return true;
    }
}

module.exports = Ship;
