import {Cell, Grid} from "../src";
import {Vector2D} from "@inwebo/vector";

const assert = require('assert');
const expect = require('chai').expect;
const chai = require('chai');

const grid = new Grid(new Vector2D(9,21));

describe('Grid', () => {

        it('grid.getDimensions().getX() = 9', () => {
            assert.equal(grid.getDimensions().getX(), 9);
        });

        it('grid.getDimensions().getY() = 21', () => {
            assert.equal(grid.getDimensions().getY(), 21);
        });

        it('grid.getRows() is array', () => {
            assert.equal(Array.isArray(grid.getRows()), true);
        });

        it('grid.hasRow(0) = true', () => {
            assert.equal(grid.hasRow(0), true);
        });

        it('grid.hasRow(20) = true', () => {
            assert.equal(grid.hasRow(20), true);
        });

        it('grid.hasRow(-1) = false', () => {
            assert.equal(grid.hasRow(-1), false);
        });

        it('grid.hasRow(21) = false', () => {
            assert.equal(grid.hasRow(21), false);
        });

        it('grid.hasCol(0) = true', () => {
            assert.equal(grid.hasCol(0), true);
        });

        it('grid.hasCol(8) = true', () => {
            assert.equal(grid.hasCol(8), true);
        });

        it('grid.hasCol(15) = false', () => {
            assert.equal(grid.hasCol(15), false);
        });

        it('grid.hasCol("e") = false', () => {
            assert.equal(grid.hasCol("e"), false);
        });

        it('grid.hasCell(7, 15) = true', () => {
            assert.equal(grid.hasCell(7, 15), true);
        });

        it('grid.hasCell(9, 21) = false', () => {
            assert.equal(grid.hasCell(9, 21), false);
        });

        it('grid.getCell(0, 0) instanceof Cell', () => {
            assert.equal(grid.getCell(0, 0) instanceof Cell, true);
        });

        it('grid.getCell(54, 7) = false', () => {
            assert.equal(grid.getCell(54, 7), false);
        });

        it('grid.getCellByVector(new Vector2D(0, 0)) instanceof Cell', () => {
            assert.equal(grid.getCellByVector(new Vector2D(0, 0)) instanceof Cell, true);
        });

        it('grid.getCellByVector(new Vector2D(54, 7)) = false', () => {
            assert.equal(grid.getCellByVector(new Vector2D(54, 7)), false);
        });

        it('grid.getGenerator() is a generator', () => {
            const generator = grid.getGenerator();

            const isGenerator = typeof generator[Symbol.iterator] == 'function' &&
                typeof generator['next'] == 'function' &&
                typeof generator['throw'] == 'function';

            assert.equal(isGenerator, true);
        });


});

const cell1 = grid.getCell(0, 1);

describe('Cell', () => {
    it('cell1.isEvenRow()', () => {
        assert.equal(cell1.isEvenRow(), false);
    });

    it('cell1.isOddRow()', () => {
        assert.equal(cell1.isOddRow(), true);
    });

    it('cell1.isEvenCol()', () => {
        assert.equal(cell1.isEvenCol(), true);
    });

    it('cell1.isOddCol()', () => {
        assert.equal(cell1.isOddCol(), false);
    });
});