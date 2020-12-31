import {Cartesian, Cell, Grid} from "../../../src";

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

        const cells = this.getGenerator() ;

        let rows = new Array(this._dimensions.getY()).fill([]);

        for (const cell of cells) {
            // if(false === this.mustLive(cell)) {
            //     cell.setAlive(false);
            // } else {
            //     cell.setAlive(true);
            // }
            const c = new CellGol(cell.getIndex());

            if(false === this.mustLive(cell)) {
                c.setAlive(false);
            } else {
                c.setAlive(true);
            }

            rows[cell.getIndex().getY()].push(c);


        }
        console.log(rows);
        this._rows = rows;
    }
}