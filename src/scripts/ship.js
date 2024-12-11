export class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    get sunk() {
        return this.hits >= this.length;
    }

    hit() {
        if (this.sunk) {
            return false;
        }

        this.hits++;
        return true;
    }
}
