import {Vector2D} from "@inwebo/vector";
import Grid from "../../../src/Grid/Grid";
import RenderGrid from "./renderGrid";

window.addEventListener("DOMContentLoaded", (event) => {
    const canvas = document.getElementById('demo');
    const render = new RenderGrid(canvas);

    const dimensions = new Vector2D(10, 10);
    const grid       = new Grid(dimensions);

    render.draw(grid);
});
