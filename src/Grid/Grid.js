import {Vector2D} from "@inwebo/vector";
import Cell from "../Cells/Cell";

export default class Grid {

    /**
     * @param {*} value
     */
    setDefaultValue(value) {
        this._defaultCellValue = value;
    }

    /**
     * @param {function} fnFill
     */
    fill(fnFill) {
        if(typeof this._fnFill === 'function') {
            this._rows   = this._defaultCellValue;
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
     * @param {function|null} fnFill Filler function callback, default return _defaultCellValue value else return's callback
     */
    constructor(dimensions, defaultCellValue = null,  fnFill = null) {
        this._dimensions       = dimensions;
        this._defaultCellValue = defaultCellValue || null;
        this._fnFill           = fnFill           || (() => {return this._defaultCellValue});

        this.setRows();
    }

    /**
     * @return {Vector2D}
     */
    getDimensions() {
        return this._dimensions;
    }

    /**
     * @param {number} row
      * @param {number} startSlice
     * @return {Array|boolean}
     */
    getRow(row, startSlice = 0) {
        if(true === this.hasRow(row)) {
            const rows = this._rows[row];

            if(typeof startSlice === 'number' && startSlice < this.getDimensions().getX()) {
                return rows.slice(startSlice);
            } else {
                return rows;
            }
        }

        return false;
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
     * @throws If cell is not accessible (out of bounds)
     */
    getCell(x, y) {
        if(this.hasCell(x, y)) {
            return this._rows[y][x];
        } else {
            throw `cell at (${x}, ${y}) is not accessible, max (${this.getDimensions().getX() - 1}, ${this.getDimensions().getY() - 1})`;
        }
    }

    /**
     * @param {number} x
     * @param {number} startSlice
     * @return {[]}
     */
    getCol(x, startSlice = 0) {
        const col = [];

        let _row = 0,
            _col = 0;

        for(const row of this._rows) {
            _row += 1;
            for(const cell of row) {
                if(x === _col) {
                    col.push(cell);
                }
                _col += 1;
            }
            _col  = 0;
        }

        if(typeof startSlice === 'number' && startSlice < this.getDimensions().getX()) {
            return col.slice(startSlice);
        } else {
            return col;
        }
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
     * Return first cell to validate callback's return true
     *
     * @param {function} callback
     * @return {Cell|boolean}
     */
    assertCells(callback) {
        const cells = this.getGenerator();

        for(const cell of cells) {
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