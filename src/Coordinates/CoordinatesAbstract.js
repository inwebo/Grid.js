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
     * @return {Map}
     */
    getNeighbors() {
        if(this._neighbors === null) {
            this._neighbors = new Map([
                ['N',  this.getNorth()],
                ['NW',  this.getNorthWest()],
                ['W',  this.getWest()],
                ['SW',  this.getSouthWest()],
                ['S',  this.getSouth()],
                ['SE',  this.getSouthEast()],
                ['E',  this.getEast()],
                ['NE',  this.getNorthEast()],
            ]);
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