import {Renderer2D} from "@inwebo/render.js";

export default class RenderGrid extends Renderer2D {
    _draw([grid]) {
        const cells = grid.getGenerator();

        for (let cell of cells) {

        }

    }
}