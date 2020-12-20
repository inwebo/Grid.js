import {Vector2D} from "@inwebo/vector";

/**
 * Convert a cell matrix position to a canvas width and height pixel position for an image.
 */
export default class Pixels {

    /**
     * @param {Vector2D} position
     * @param {Vector2D} canvasSize
     */
    constructor(position, canvasSize) {
        this._position   = position;
        this._canvasSize = canvasSize;
    }

    /**
     * @param {Vector2D} imageSize
     * @param {Vector2D} offset
     */
    convert(imageSize, offset) {

    }
}