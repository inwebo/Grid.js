import CoordinatesAbstract from "./CoordinatesAbstract";
import {Vector2D} from "@inwebo/vector";

/**
 * Get Cartesian's neighbor's coordinates.
 */
export default class Cartesian extends CoordinatesAbstract {

    /**
     * @param {number} distance
     * @return {Vector2D}
     */
    getNorth(distance = 1) {
        return Vector2D.add(this._position.clone(), new Vector2D(0, distance * -1));
    }

    /**
     * @param {number} distance
     * @return {Vector2D}
     */
    getNorthEast(distance = 1) {
        return Vector2D.add(this._position.clone(), new Vector2D(distance, distance * -1));
    }

    /**
     * @param {number} distance
     * @return {Vector2D}
     */
    getEast(distance = 1) {
        return Vector2D.add(this._position.clone(), new Vector2D(distance, 0));
    }

    /**
     * @param {number} distance
     * @return {Vector2D}
     */
    getSouthEast(distance = 1) {
        return Vector2D.add(this._position.clone(), new Vector2D(distance, distance));
    }

    /**
     * @param {number} distance
     * @return {Vector2D}
     */
    getSouth(distance = 1) {
        return Vector2D.add(this._position.clone(), new Vector2D(0, distance));
    }

    /**
     * @param {number} distance
     * @return {Vector2D}
     */
    getSouthWest(distance = 1) {
        return Vector2D.add(this._position.clone(), new Vector2D(distance * -1, distance));
    }

    /**
     * @param {number} distance
     * @return {Vector2D}
     */
    getWest(distance = 1) {
        return Vector2D.add(this._position.clone(), new Vector2D(distance * -1, 0));
    }

    /**
     * @param {number} distance
     * @return {Vector2D}
     */
    getNorthWest(distance = 1) {
        return Vector2D.add(this._position.clone(), new Vector2D(distance * -1, distance * -1));
    }
};