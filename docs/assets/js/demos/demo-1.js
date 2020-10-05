import {Vector2D} from "@inwebo/vector";
import Grid from "../../../../src/Grid/Grid";
import RenderGrid from "../renderGrid";

const demo1 = () => {
    const canvas = document.getElementById('demo-1');

    const form = {
        grid: {
            cols: document.getElementById('cols').value,
            rows: document.getElementById('rows').value,
        },
        tile: {
            width: document.getElementById('tile-width').value,
            height: document.getElementById('tile-height').value,
        }
    }

    console.log(form);

    const dimensions = new Vector2D(form.grid.cols, form.grid.rows);
    const grid       = new Grid(dimensions);

    const tileSize   = new Vector2D(form.tile.width, form.tile.height);
    const renderGrid = new RenderGrid(canvas);

    renderGrid._draw([grid, tileSize]);

};

export default demo1;
