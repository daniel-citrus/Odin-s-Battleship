class Ship {
    constructor(name, length) {
        this.length = length;
        this.name = name;
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

    sinkShip() {
        this.hits = this.length;
    }
}

export default Ship;
/* module.exports = Ship; */
