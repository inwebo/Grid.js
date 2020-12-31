import {Cartesian, Cell, Grid} from "../../../src";
import {Vector2D} from "@inwebo/vector";

class CellGol extends Cell {

    setAlive(bool) {
        this._isAlive = bool;
    }

    isAlive() {
        return this._isAlive;
    }

    constructor(index) {
        super(index);
        this._isAlive   = false;
        this._hasMutate = false;
    }
}

export default class Gol extends Grid {

    /**
     * 2 or 3 neighbours
     * @param cell
     */
    mustLive(cell) {
        const c = new Cartesian();
        const n = c.getNeighbors(cell.getIndex());
        let aliveNeighbours = 0;

        n.forEach((v, k)=> {
            if(this.hasCell(v.getX(), v.getY())) {
                const c = this.getCell(v.getX(), v.getY());

                if(c.isAlive()) {
                    aliveNeighbours += 1;
                }
            }
        });

        if(cell.isAlive() && aliveNeighbours < 2) {
            return false;
        }

        if(cell.isAlive() && (aliveNeighbours === 2 && aliveNeighbours === 3)) {
            return true;
        }

        if(cell.isAlive() && aliveNeighbours > 3) {
            return false;
        }

        if(!cell.isAlive() && aliveNeighbours === 3) {
            return true;
        }

        // if(!cell.isAlive()) {
        //     return false;
        // }

        // return false;
        return cell.isAlive();
        // return aliveNeighbours >= 2 && aliveNeighbours <= 4;
    }

    update() {
        const rows = new Array(this._dimensions.getY()).fill(this._defaultCellValue);
        Object.seal(rows);
        for(let y = 0; y < rows.length; y++) {

            let cols = [];

            for(let x = 0; x < this._dimensions.getX(); x++) {
                const cell = this.getCell(x, y);
                const mustLive = this.mustLive(cell);

                const newCell = new CellGol(new Vector2D(x, y));


                newCell.setAlive(mustLive);
                cols.push(newCell);
            }
            Object.seal(cols);
            rows[y] = cols;
        }

        this._rows = rows;
    }
}