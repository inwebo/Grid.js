/**
 * A cell knows its matrix's position (_index), if is in odd or even row and col. You MUST not instantiate it.
 */
export default class CellAbstract {
  /**
   * Cartesian coordinates
   * @return {Vector2D}
   */
  getIndex() {
    return this._index
  }

  // region helpers
  /**
   * @return {boolean}
   */
  isEvenRow() {
    return this._index.getY() % 2 === 0
  }

  /**
   * @return {boolean}
   */
  isOddRow() {
    return !this.isEvenRow()
  }

  /**
   * @return {boolean}
   */
  isEvenCol() {
    return this._index.getX() % 2 === 0
  }

  /**
   * @return {boolean}
   */
  isOddCol() {
    return !this.isEvenCol()
  }

  // endregion

  /**
   * @param {Vector2D} index
   */
  constructor(index) {
    this._index = index
  }
}
