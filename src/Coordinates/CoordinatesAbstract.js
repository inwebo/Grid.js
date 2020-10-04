import {Vector2D} from "@inwebo/vector";

export default class CoordinatesAbstract {
    /**
     * @param {Vector2D} vector
     */
    constructor(vector) {
        this._center    = vector;
        this._neighbors = null;
    }

    /**
     * Return all neighbors
     * @param {boolean} simple
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
    getCenter() {
        return this._center;
    }

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
}