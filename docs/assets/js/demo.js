import {Vector2D} from "@inwebo/vector";
import Grid from "../../../src/Grid/Grid";
import RenderGrid from "./renderGrid";

window.addEventListener("DOMContentLoaded", (event) => {
    let canvas = document.getElementById('demo-1');

    // grid
    const dimensions = new Vector2D(40,30);
    const grid = new Grid(dimensions);

    const tileSize = new Vector2D(120,120);

    canvas = document.getElementById('demo-2');
    const renderGrid = new RenderGrid(canvas);
    renderGrid._draw([grid, tileSize]);

});
