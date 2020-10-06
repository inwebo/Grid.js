import {Renderer2D} from "@inwebo/render.js";
import {Vector2D} from "@inwebo/vector";

export default class RenderGrid extends Renderer2D {
    _draw([grid, tileSize, cellOffset, colour1, colour2]) {
        this._clear();
        const cells = grid.getGenerator();

        for (let cell of cells) {
            const origin = new Vector2D(cell.getIndex().getX() * tileSize.getX(), cell.getIndex().getY() * tileSize.getY());

            if(cell.isEvenRow() && cell.isEvenCol()) {
                this.getCtx().fillStyle = colour1;
            }

            if(cell.isEvenRow() && cell.isOddCol()) {
                this.getCtx().fillStyle = colour2;
            }

            if(cell.isOddRow() && cell.isEvenCol()) {
                this.getCtx().fillStyle = colour2
            }

            if(cell.isOddRow() && cell.isOddCol()) {
                this.getCtx().fillStyle = colour1;
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