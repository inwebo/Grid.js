import {Vector2D} from "@inwebo/vector";

/**
 * Matrix coordinates, knows its neighbors
 */
export default class CoordinatesAbstract {
    /**
     * @param {Vector2D} position Grid position (x, y)
     */
    constructor(position) {
        this._position  = position;
        this._neighbors = null;
    }

    /**
     * Return all neighbors
     * @param {boolean} simple true return N,E,S,W false return N, NW, W, SW, S, SE, E, NE
     * @return {Map}
     */
    getNeighbors(simple = true) {
        if(this._neighbors === null) {
            this._neighbors = new Map([
                ['N',  this.getNorth()],
                ['W',  this.getWest()],
                ['S',  this.getSouth()],
                ['E',  this.getEast()],
            ]);

            if(false === simple) {
                this._neighbors.set('NW', this.getNorthWest());
                this._neighbors.set('SW', this.getSouthWest());
                this._neighbors.set('SE', this.getSouthEast());
                this._neighbors.set('NE', this.getNorthEast());
            }
        }

        return this._neighbors;
    }

    /**
     * @returns {Vector2D}
     */
    getPosition() {
        return this._position;
    }

    // region override
    /**
     * @throws
     */
    getNorth() {
        throw 'Do not instanciate me !';
    }

    /**
     * @return {Vector2D}
     */
    getNorthEast() {
        throw 'Do not instanciate me !';
    }

    /**
     * @return {Vector2D}
     */
    getEast() {
        throw 'Do not instanciate me !';
    }

    /**
     * @return {Vector2D}
     */
    getSouthEast() {
        throw 'Do not instanciate me !';
    }

    /**
     * @return {Vector2D}
     */
    getSouth() {
        throw 'Do not instanciate me !';
    }

    /**
     * @return {Vector2D}
     */
    getSouthWest() {
        throw 'Do not instanciate me !';
    }

    /**
     * @return {Vector2D}
     */
    getWest() {
        throw 'Do not instanciate me !';
    }

    /**
     * @return {Vector2D}
     */
    getNorthWest() {
        throw 'Do not instanciate me !';
    }
    // endregion
}