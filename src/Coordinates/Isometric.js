import CoordinatesAbstract from "./CoordinatesAbstract";
import {Vector2D} from "@inwebo/vector";
/**
 * Get isometrics neighbor's coordinates.
 */
export default class Isometric extends CoordinatesAbstract {

    /**
     * @inheritDoc
     */
    getNorth(vector, distance = 1) {
        return Vector2D.add(this._position, new Vector2D(0, -2));
    }

    /**
     * @inheritDoc
     */
    getNorthEast(vector, distance = 1) {
        return (this._position.getY() % 2 === 0) ?
            Vector2D.add(this._position, new Vector2D(0, -1)) :
            Vector2D.add(this._position, new Vector2D(1, -1))
            ;
    }

    /**
     * @inheritDoc
     */
    getEast(vector, distance = 1) {
        return Vector2D.add(this._position, new Vector2D(1, 0));
    }

    /**
     * @inheritDoc
     */
    getSouthEast(vector, distance = 1) {
        return (this._position.getY() % 2 === 0) ?
            Vector2D.add(this._position, new Vector2D(0, 1)) :
            Vector2D.add(this._position, new Vector2D(1, 1))
            ;
    }

    /**
     * @inheritDoc
     */
    getSouth(vector, distance = 1) {
        return Vector2D.add(this._position, new Vector2D(0, 2));
    }

    /**
     * @inheritDoc
     */
    getSouthWest(vector, distance = 1) {
        return (this._position.getY() % 2 === 0) ?
            Vector2D.add(this._position, new Vector2D(-1, 1)) :
            Vector2D.add(this._position, new Vector2D(0, 1))
            ;
    }

    /**
     * @inheritDoc
     */
    getWest(vector, distance = 1) {
        return Vector2D.add(this._position, new Vector2D(-1, 0));
    }

    /**
     * @inheritDoc
     */
    getNorthWest(vector, distance = 1) {
        return (this._position.getY() % 2 === 0) ?
            Vector2D.add(this._position, new Vector2D(-1, -1)) :
            Vector2D.add(this._position, new Vector2D(0, -1))
            ;
    }
}