import {Renderer2D} from "@inwebo/render.js";
import {Vector2D} from "@inwebo/vector";

export default class RenderGol extends Renderer2D {
    _draw([grid, cellOffset, colour1, colour2]) {

        this._clear();
        const cells = grid.getGenerator();

        const tileSize = new Vector2D(5,5);

        for (let cell of cells) {
            const origin = new Vector2D(cell.getIndex().getX() * tileSize.getX(), cell.getIndex().getY() * tileSize.getY());

            if(cell.isAlive()) {
                this.getCtx().fillStyle = 'white';
                // this.getCtx().fillStyle = colour1;
            } else {
                this.getCtx().fillStyle = 'black';
                // this.getCtx().fillStyle = colour2;
            }

            this.getCtx().fillRect(
                origin.getX() + parseInt(cellOffset.getX()),
                origin.getY() + parseInt(cellOffset.getX()),
                tileSize.getX() - parseInt(cellOffset.getY()),
                tileSize.getY() - parseInt(cellOffset.getY())
            );
        }
    }
}