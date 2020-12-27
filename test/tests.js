import {Cartesian, Cell, Grid} from "../src";
import {Vector2D} from "@inwebo/vector";

const assert = require('assert');
const expect = require('chai').expect;
const chai = require('chai');

const grid = new Grid(new Vector2D(9,21), null,([col, row]) => {
    return new Cell(new Vector2D(col, row));
});

describe('Grid construct', () => {
    const g = new Grid(new Vector2D(9,9));

    it('grid s cells are not null', () => {
        assert.equal(grid.assertCells((cell) => {
            return cell !== null;
        }), false);
    });
});

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

describe('Coordinates', () => {
    const v1 = new Vector2D(3,3);
    const c1 = new Cartesian(v1);

    describe('Cartesian', () => {
        describe('Simple', () => {
            let n1 = c1.getNeighbors();

            it('N,NE,E,SE,S,SW,W', () => {
                assert.equal(n1.get('N').getX() === 3, true);
                assert.equal(n1.get('N').getY() === 2, true);

                assert.equal(n1.get('NW').getX() === 2, true);
                assert.equal(n1.get('NW').getY() === 2, true);

                assert.equal(n1.get('NE').getX() === 4, true);
                assert.equal(n1.get('NE').getY() === 2, true);

                assert.equal(n1.get('E').getX() === 4, true);
                assert.equal(n1.get('E').getY() === 3, true);

                assert.equal(n1.get('SE').getX() === 4, true);
                assert.equal(n1.get('SE').getY() === 4, true);

                assert.equal(n1.get('S').getX() === 3, true);
                assert.equal(n1.get('S').getY() === 4, true);

                assert.equal(n1.get('SW').getX() === 2, true);
                assert.equal(n1.get('SW').getY() === 4, true);

                assert.equal(n1.get('W').getX() === 2, true);
                assert.equal(n1.get('W').getY() === 3, true);
            });
        });
    });
});