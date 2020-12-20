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
     * @param {number} distance
     * @throws
     */
    getNorth(distance = 1) {
        throw 'Do not instanciate me !';
    }

    /**
     * @param {number} distance
     * @return {Vector2D}
     */
    getNorthEast(distance = 1) {
        throw 'Do not instanciate me !';
    }

    /**
     * @param {number} distance
     * @return {Vector2D}
     */
    getEast(distance = 1) {
        throw 'Do not instanciate me !';
    }

    /**
     * @param {number} distance
     * @return {Vector2D}
     */
    getSouthEast(distance = 1) {
        throw 'Do not instanciate me !';
    }

    /**
     * @param {number} distance
     * @return {Vector2D}
     */
    getSouth(distance = 1) {
        throw 'Do not instanciate me !';
    }

    /**
     * @param {number} distance
     * @return {Vector2D}
     */
    getSouthWest(distance = 1) {
        throw 'Do not instanciate me !';
    }

    /**
     * @param {number} distance
     * @return {Vector2D}
     */
    getWest(distance = 1) {
        throw 'Do not instanciate me !';
    }

    /**
     * @param {number} distance
     * @return {Vector2D}
     */
    getNorthWest(distance = 1) {
        throw 'Do not instanciate me !';
    }
    // endregion
}