import {Vector2D} from "@inwebo/vector";
import Grid from "../../../../src/Grid/Grid";
import RenderGrid from "../renderGrid";
import RenderGol from "../renderGol";
import {Cartesian, Cell} from "../../../../src";
import Gol from "../Gol";

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
//
//     class C extends Cell {
//         getType() {
//             return this._type;
//         }
//
//         setType(type) {
//             this._type = type;
//         }
//
//         setData(data) {
//             this._data = data;
//         }
//
//         getData() {
//             return this._data;
//         }
//
//         getSize() {
//             return this._size;
//         }
//
//         setSize(size) {
//             this._size = size;
//         }
//
//         constructor(vector) {
//             super(vector);
//             this._data = null;
//             this._type = null;
//             this._size = null;
//         }
//     }
//
//     /**
//      * Subject
//      * @type {Grid}
//      */
//     const g = new Grid(new Vector2D(9,9), null, ([x, y]) => {
//         return new C(new Vector2D(x,y));
//     });
//
//     const char = Array.from('ABCDEFGHIJKLMN');
//
//     /**
//      * @param {int} a Min int
//      * @param {int} b Max int
//      * @return {number}
//      */
//     const rand = (a,b) => a+(b-a+1)*crypto.getRandomValues(new Uint32Array(1))[0]/2**32|0;
//
//     const MAX_SIZE = 3;
//
//     const TYPES = ['commercial', 'residential'];
//
//     const result = [];
//
//     /**
//      * @param {Grid} grid
//      * @param {C} start
//      */
//     const populateGrid = (grid, start) => {
//         console.log('Start cell',start);
//         const rows = g.getRow(start.getIndex().getY(), start.getIndex().getY());
//         const cols = g.getCol(start.getIndex().getX(), start.getIndex().getX());
//
//         let freeX = 0;
//         let freeY = 0;
//
//         for(const cell of rows) {
//             if(cell.getData() !== null) {
//                 break;
//             }
//             freeX += 1;
//         }
//
//         for(const cell of cols) {
//             if(cell.getData() !== null) {
//                 break;
//             }
//             freeY += 1;
//         }
//
//         console.log('FreeX', freeX, 'FreeY', freeY);
//
//         let _currentMax = ((freeX > freeY) ? freeY : freeX);
//         _currentMax = (_currentMax > MAX_SIZE) ? MAX_SIZE : _currentMax;
//
//         const maxRand = rand(1, _currentMax);
//         console.log('Max rand', maxRand)
//         const c = char.shift();
//
//         const type = (rand(1, 2) %2 ===0) ? TYPES[0]: TYPES[1];
// console.log(type);
//         start.setSize(maxRand);
//         result.push(start);
//
//         for(let x = 0; x < maxRand; x++) {
//             for(let y = 0; y < maxRand; y++) {
//                 if(x <= maxRand && y <= maxRand) {
//                     g.getCell(start.getIndex().getX() + x, start.getIndex().getY() + y).setData(c);
//                     g.getCell(start.getIndex().getX() + x, start.getIndex().getY() + y).setType(type);
//                 }
//             }
//         }
//
//         // const s = g.assertCells((cell) => {
//         //     return cell.getData() === null;
//         // });
//         //
//         // console.log('Next cell', s);
//
//         // if(s.getData() === null) {
//         //     populateGrid(g, s);
//         // }
//
//         // console.log(result);
//     };
//
//     while ( g.assertCells((cell) => {
//         return cell.getData() === null;
//     }) !== false) {
//         const start = g.assertCells((cell) => {
//             return cell.getData() === null;
//         });
//
//         populateGrid(g, start);
//     }
//
//     console.log(g.getRows());
//
//     const c = document.getElementById('demo-2');
//
//     var context = c.getContext("2d");
//
//     context.mozImageSmoothingEnabled    = false;
//     context.webkitImageSmoothingEnabled = false;
//     context.msImageSmoothingEnabled     = false;
//     context.imageSmoothingEnabled       = false;
//
//     for(const cell of g.getGenerator()) {
//
//         if(cell.getType() === 'commercial') {
//             context.fillStyle = "blue";
//         } else {
//             context.fillStyle = "green";
//         }
//
//         context.fillRect(cell.getIndex().getX(), cell.getIndex().getY(), 1, 1);
//
//     }
//
//     const p    = [];
//     const pixels = g.getGenerator();
//
//     let squares = 0;
//
//     for(const pixel of pixels) {
//         if(pixel.getSize() !== null) {
//             p.push(pixel);
//
//             squares += pixel.getSize() * pixel.getSize();
//         }
//     }
//
//     console.log(p, squares);


    class CellGol extends Cell {

        setAlive(bool) {
            this._isAlive = bool;
        }

        isAlive() {
            return this._isAlive;
        }

        constructor(index) {
            super(index);
            this._isAlive = false;
        }
    }

    const gol = new Gol(new Vector2D(3,3), null, ([col, row]) => {
        return new CellGol(new Vector2D(col, row));
    });

    const golCanvas = document.getElementById('demo-2');

    const renderGol = new RenderGol(golCanvas);

    // renderGol._draw([grid, tileSize, cellOffset, form.colours.first.value, form.colours.second.value]);

    /**
     * @param {int} a Min int
     * @param {int} b Max int
     * @return {number}
     */
    const rand = (a,b) => a+(b-a+1)*crypto.getRandomValues(new Uint32Array(1))[0]/2**32|0;

    const cells = gol.getGenerator();

    // for (const cell of cells) {
    //     const r = rand(1, 100);
    //
    //     if(r <= 10) {
    //         cell.setAlive(true);
    //     }
    // }

    gol.getCell(1,0).setAlive(true);
    gol.getCell(1,1).setAlive(true);
    gol.getCell(1,2).setAlive(true);

    // console.log(gol.mustLive(gol.getCell(9,10)));
    // console.log(gol.mustLive(gol.getCell(0,0)));

    console.log(gol.getRows());

    renderGol._draw([gol, tileSize, cellOffset, form.colours.first.value, form.colours.second.value]);

    document.getElementById('update').onclick = () => {
        gol.update();
        // console.log(gol.getRows());
        renderGol._draw([gol, tileSize, cellOffset, form.colours.first.value, form.colours.second.value]);
    };

    // setInterval(() => {
    //     gol.update();
    //     renderGol._draw([gol, tileSize, cellOffset, form.colours.first.value, form.colours.second.value]);
    // }, 500);

};

export default demo1;
