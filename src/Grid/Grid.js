import {Vector2D} from "@inwebo/vector";
import Cell from "../Cells/Cell";

export default class Grid {

    /**
     * @param {function} fnFill
     */
    fill(fnFill) {
        if(typeof this._fnFill === 'function') {
            this._rows   = null;
            this._fnFill = fnFill;
            this.setRows();
        }
    }

    /**
     * @private
     */
    setRows() {
        const rows = new Array(this._dimensions.getY()).fill(this._defaultCellValue);
        Object.seal(rows);
        for(let y = 0; y < rows.length; y++) {

            let cols = [];

            for(let x = 0; x < this._dimensions.getX(); x++) {
                if(typeof this._fnFill === 'function') {
                    cols.push(this._fnFill.call(this,[x, y]));
                }
            }
            Object.seal(cols);
            rows[y] = cols;
        }

        this._rows = rows;
    }

    /**
     * @param {Vector2D} dimensions Array of rows (y) with cols (x) dimensions.
     * @param {*} defaultCellValue Default cell value
     * @param {function|null} fnFill Filler function callback
     */
    constructor(dimensions, defaultCellValue = null,  fnFill = null) {
        this._dimensions       = dimensions;
        this._defaultCellValue = defaultCellValue;
        this._fnFill           = fnFill;

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
     * Test if the callback function return true
     *
     * @param {number} col
     * @param {number} row
     * @param {function} callback Must return a boolean, should be true
     * @return {boolean}
     */
    assertCell(col, row, callback) {
        if(this.hasCell(col, row)) {
            const cell = this.getCell(col, row);
            if(typeof callback === 'function') {
                return callback.call(this, cell) === true;
            }
        }

        return false;
    }

    /**
     * @param {function} callback
     * @return {Cell|boolean}
     */
    assertCells(callback) {

        const cells = this.getGenerator();

        for(const cell in cells) {
            if(typeof callback === 'function') {
                const assertCell = callback.call(this, cell) === true;

                if(true === assertCell) {
                    return cell;
                }
            }
        }

        return false;
    }

    /**
     * Return all cells by reference
     *
     * @return {Generator<[Cell]>}
     */
    * getGenerator() {
        for(const row of this._rows) {
            for(const cell of row) {
                yield cell;
            }
        }
    }
}