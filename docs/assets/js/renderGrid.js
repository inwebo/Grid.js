import {Renderer2D} from "@inwebo/render.js";
import {Vector2D} from "@inwebo/vector";

export default class RenderGrid extends Renderer2D {
    _draw([grid, tileSize]) {
        const cells = grid.getGenerator();

        for (let cell of cells) {
            const origin = new Vector2D(cell.getIndex().getX() * tileSize.getX(), cell.getIndex().getY() * tileSize.getY());

            if(cell.isEvenRow() && cell.isEvenCol()) {
                this.getCtx().fillStyle = "#766273";
            }

            if(cell.isEvenRow() && cell.isOddCol()) {
                this.getCtx().fillStyle = "#B57786";
            }

            if(cell.isOddRow() && cell.isEvenCol()) {
                this.getCtx().fillStyle = "#B57786";
            }

            if(cell.isOddRow() && cell.isOddCol()) {
                this.getCtx().fillStyle = "#766273";
            }

            this.getCtx().fillRect(
                origin.getX()+2,
                origin.getY()+2,
                tileSize.getX()-2,
                tileSize.getY()-2
            );
        }
    }
}