import CoordinatesAbstract from "./CoordinatesAbstract";
import {Vector2D} from "@inwebo/vector";

/**
 * Get Cartesian's neighbor's coordinates.
 */
export default class Cartesian extends CoordinatesAbstract {

    /**
     * @inheritDoc
     */
    getNorth(vector, distance = 1) {
        return Vector2D.add(vector.clone(), new Vector2D(0, distance * -1));
    }

    /**
     * @inheritDoc
     */
    getNorthEast(vector, distance = 1) {
        return Vector2D.add(vector.clone(), new Vector2D(distance, distance * -1));
    }

    /**
     * @inheritDoc
     */
    getEast(vector, distance = 1) {
        return Vector2D.add(vector.clone(), new Vector2D(distance, 0));
    }

    /**
     * @inheritDoc
     */
    getSouthEast(vector, distance = 1) {
        return Vector2D.add(vector.clone(), new Vector2D(distance, distance));
    }

    /**
     * @inheritDoc
     */
    getSouth(vector, distance = 1) {
        return Vector2D.add(vector.clone(), new Vector2D(0, distance));
    }

    /**
     * @inheritDoc
     */
    getSouthWest(vector, distance = 1) {
        return Vector2D.add(vector.clone(), new Vector2D(distance * -1, distance));
    }

    /**
     * @inheritDoc
     */
    getWest(vector, distance = 1) {
        return Vector2D.add(vector.clone(), new Vector2D(distance * -1, 0));
    }

    /**
     * @inheritDoc
     */
    getNorthWest(vector, distance = 1) {
        return Vector2D.add(vector.clone(), new Vector2D(distance * -1, distance * -1));
    }
};