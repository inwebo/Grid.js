import {Vector2D} from "@inwebo/vector";
import Grid from "../../../../src/Grid/Grid";
import RenderGrid from "../renderGrid";
import {Cell} from "../../../../src";

const demo1 = () => {
    const canvas = document.getElementById('demo-1');

    const form = {
        grid: {
            cols: document.getElementById('cols'),
            rows: document.getElementById('rows'),
        },
        tile: {
            width: document.getElementById('tile-width'),
            height: document.getElementById('tile-height')
        },
        cell: {
            offsetX: document.getElementById('cell-offset-x'),
            offsetY: document.getElementById('cell-offset-y'),
        },
        colours: {
            first: document.getElementById('colour1'),
            second: document.getElementById('colour2'),
        },
        display: {
            cols: document.getElementById('cols-display'),
            rows: document.getElementById('rows-display'),
            width: document.getElementById('width-display'),
            height: document.getElementById('height-display'),
            offsetX: document.getElementById('offsetX-display'),
            offsetY: document.getElementById('offsetY-display'),
        }
    }

    form.display.cols.innerHTML    = form.grid.cols.value;
    form.display.rows.innerHTML    = form.grid.rows.value;
    form.display.width.innerHTML   = form.tile.width.value;
    form.display.height.innerHTML  = form.tile.height.value;
    form.display.offsetX.innerHTML = form.cell.offsetX.value;
    form.display.offsetY.innerHTML = form.cell.offsetY.value;

    const dimensions = new Vector2D(parseInt(form.grid.cols.value), parseInt(form.grid.rows.value));
    const grid       = new Grid(dimensions, null, ([col, row]) => {
        return new Cell(new Vector2D(col, row));
    });

    const cellOffset = new Vector2D(parseInt(form.cell.offsetX.value), parseInt(form.cell.offsetY.value));

    const tileSize   = new Vector2D(parseInt(form.tile.width.value), parseInt(form.tile.height.value));
    const renderGrid = new RenderGrid(canvas);

    renderGrid._draw([grid, tileSize, cellOffset, form.colours.first.value, form.colours.second.value]);

    class C extends Cell {
        setData(data) {
            this._data = data;
        }

        getData() {
            return this._data;
        }

        constructor(vector) {
            super(vector);
            this._data = null;
        }
    }

    /**
     * Subject
     * @type {Grid}
     */
    const g = new Grid(new Vector2D(5,5), null, ([x, y]) => {
        return new C(new Vector2D(x,y));
    });

    const char = Array.from('ABCDEFGHIJKLMN');

    /**
     * @param {int} a Min int
     * @param {int} b Max int
     * @return {number}
     */
    const rand = (a,b) => a+(b-a+1)*crypto.getRandomValues(new Uint32Array(1))[0]/2**32|0;

    const MAX_SIZE = 3;

    /**
     * @param {Grid} grid
     * @param {C} start
     */
    const populateGrid = (grid, start) => {
        console.log('Start cell',start);
        const rows = g.getRow(start.getIndex().getY(), start.getIndex().getY());
        const cols = g.getCol(start.getIndex().getX(), start.getIndex().getX());

        let freeX = 0;
        let freeY = 0;

        for(const cell of rows) {
            if(cell.getData() !== null) {
                break;
            }
            freeX += 1;
        }

        for(const cell of cols) {
            if(cell.getData() !== null) {
                break;
            }
            freeY += 1;
        }

        console.log('FreeX', freeX, 'FreeY', freeY);

        let _currentMax = ((freeX > freeY) ? freeX : freeY);
        _currentMax = (_currentMax > MAX_SIZE) ? MAX_SIZE : _currentMax;

        const maxRand = rand(1, _currentMax);
        console.log('Max rand', maxRand)
        const c = char.shift();
        for(let x = 0; x < maxRand; x++) {
            for(let y = 0; y < maxRand; y++) {
                if(x <= maxRand && y <= maxRand) {
                    g.getCell(start.getIndex().getX() + x, start.getIndex().getY() + y).setData(c);
                }
            }
        }

        // const s = g.assertCells((cell) => {
        //     return cell.getData() === null;
        // });
        //
        // console.log('Next cell', s);

        // if(s.getData() === null) {
        //     populateGrid(g, s);
        // }
    };

    const start = g.assertCells((cell) => {
        return cell.getData() === null;
    });

    populateGrid(g, start);

    // var s = g.assertCells((cell) => {
    //     return cell.getData() === null;
    // });
    //
    // if(s !== false) {
    //     populateGrid(g, s);
    // }
    //
    // var s = g.assertCells((cell) => {
    //     return cell.getData() === null;
    // });
    //
    // if(s !== false) {
    //     populateGrid(g, s);
    // }

    console.log(g.getRows());

    while ( g.assertCells((cell) => {
        return cell.getData() === null;
    }) !== false) {
        const start = g.assertCells((cell) => {
            return cell.getData() === null;
        });

        populateGrid(g, start);
    }

    console.log(g.getRows());
};

export default demo1;
