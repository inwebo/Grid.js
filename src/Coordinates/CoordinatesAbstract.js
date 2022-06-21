import { Vector2D } from '@inwebo/vector'

/**
 * Matrix coordinates, knows its neighbors
 */
export default class CoordinatesAbstract {
  /**
   * @param {Vector2D} vector
   * @return {Map} A Map instance with keys: N, NW, W, SW, S, SE, E, NE
   */
  getNeighbors(vector) {
    return new Map([
      ['N', this.getNorth(vector)],
      ['NW', this.getNorthWest(vector)],
      ['W', this.getWest(vector)],
      ['SW', this.getSouthWest(vector)],
      ['S', this.getSouth(vector)],
      ['SE', this.getSouthEast(vector)],
      ['E', this.getEast(vector)],
      ['NE', this.getNorthEast(vector)],
    ])
  }

  // region override
  /**
   * @param {Vector2D} vector
   * @param {number} distance
   * @return {Vector2D}
   */
  getNorth(vector, distance = 1) {
    throw 'Do not instanciate me !'
  }

  /**
   * @param {Vector2D} vector
   * @param {number} distance
   * @return {Vector2D}
   */
  getNorthEast(vector, distance = 1) {
    throw 'Do not instanciate me !'
  }

  /**
   * @param {Vector2D} vector
   * @param {number} distance
   * @return {Vector2D}
   */
  getEast(vector, distance = 1) {
    throw 'Do not instanciate me !'
  }

  /**
   * @param {Vector2D} vector
   * @param {number} distance
   * @return {Vector2D}
   */
  getSouthEast(vector, distance = 1) {
    throw 'Do not instanciate me !'
  }

  /**
   * @param {Vector2D} vector
   * @param {number} distance
   * @return {Vector2D}
   */
  getSouth(vector, distance = 1) {
    throw 'Do not instanciate me !'
  }

  /**
   * @param {Vector2D} vector
   * @param {number} distance
   * @return {Vector2D}
   */
  getSouthWest(vector, distance = 1) {
    throw 'Do not instanciate me !'
  }

  /**
   * @param {Vector2D} vector
   * @param {number} distance
   * @return {Vector2D}
   */
  getWest(vector, distance = 1) {
    throw 'Do not instanciate me !'
  }

  /**
   * @param {Vector2D} vector
   * @param {number} distance
   * @return {Vector2D}
   */
  getNorthWest(vector, distance = 1) {
    throw 'Do not instanciate me !'
  }
  // endregion
}
