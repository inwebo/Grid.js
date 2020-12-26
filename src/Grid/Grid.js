import {Vector2D} from "@inwebo/vector";
import Cell from "../Cells/Cell";

export default class Grid {

    /**
     * @param {number} x
     * @param {number} y
     * @return {Cell}
     * @private
     */
    _cellFactory(x, y) {
        return new Cell(new Vector2D(x, y));
    }

    /**
     * @private
     */
    setRows() {
        const rows = new Array(this._dimensions.getY()).fill(null);
        Object.seal(rows);
        for(let i = 0; i < rows.length; i++) {

            let cols = [];

            for(let j = 0; j < this._dimensions.getX(); j++) {
                cols.push(this._cellFactory(j, i));
                // cols.push(new Cell(new Vector2D(j, i)));
            }
            Object.seal(cols);
            rows[i] = cols;
        }

        this._rows = rows;
    }

    /**
     * @param {Vector2D} dimensions Array of rows (y) with cols (x) dimensions.
     */
    constructor(dimensions) {
        this._dimensions = dimensions;
        this.setRows();
    }

    /**
     * @return {Vector2D}
     */
    getDimensions() {
        return this._dimensions;
    }

    /**
     * @return {[Cell][]}
     */
    getRows() {
        return this._rows;
    }

    /**
     * @param {int} row index, start at 0
     * @return {boolean}
     */
    hasRow(row) {
        return (typeof (this._rows[row]) !== 'undefined');
    }

    /**
     * @param {int} col index, start at 0
     * @return {boolean}
     */
    hasCol(col) {
        return (typeof (this._rows[0][col]) !== 'undefined');
    }

    /**
     * @param {int} x col
     * @param {int} y row
     * @return {boolean}
     */
    hasCell(x, y) {
        if(this.hasRow(y)) {
            if(typeof (this._rows[y][x]) !== 'undefined') {
                return true;
            }
        }

        return false;
    }

    /**
     * @param {int} x col
     * @param {int} y row
     * @return {Cell|boolean}
     */
    getCell(x, y) {
        if(this.hasCell(x, y)) {
            return this._rows[y][x];
        }

        return false;
    }

    /**
     * @param {Vector2D} vector2d
     * @return {Cell|boolean}
     */
    getCellByVector(vector2d) {
        return this.getCell(vector2d.getX(), vector2d.getY());
    }

    /**
     * Return all cells by reference
     *
     * @return {Generator<Cell>}
     */
    * getGenerator() {
        for(const row of this._rows) {
            for(const cell of row) {
                yield cell;
            }
        }
    }
}