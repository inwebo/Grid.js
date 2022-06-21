import { Vector2D } from '@inwebo/vector'
import Grid from '../../../../src/Grid/Grid'
import RenderGrid from '../renderGrid'
import { Cell } from '../../../../src'

const demo1 = () => {
  const canvas = document.getElementById('demo-1')

  const form = {
    grid: {
      cols: document.getElementById('cols'),
      rows: document.getElementById('rows')
    },
    tile: {
      width: document.getElementById('tile-width'),
      height: document.getElementById('tile-height')
    },
    cell: {
      offsetX: document.getElementById('cell-offset-x'),
      offsetY: document.getElementById('cell-offset-y')
    },
    colours: {
      first: document.getElementById('colour1'),
      second: document.getElementById('colour2')
    },
    display: {
      cols: document.getElementById('cols-display'),
      rows: document.getElementById('rows-display'),
      width: document.getElementById('width-display'),
      height: document.getElementById('height-display'),
      offsetX: document.getElementById('offsetX-display'),
      offsetY: document.getElementById('offsetY-display')
    }
  }

  form.display.cols.innerHTML = form.grid.cols.value
  form.display.rows.innerHTML = form.grid.rows.value
  form.display.width.innerHTML = form.tile.width.value
  form.display.height.innerHTML = form.tile.height.value
  form.display.offsetX.innerHTML = form.cell.offsetX.value
  form.display.offsetY.innerHTML = form.cell.offsetY.value

  const dimensions = new Vector2D(parseInt(form.grid.cols.value), parseInt(form.grid.rows.value))

  const grid = new Grid(dimensions, null, ([col, row]) => {
    return new Cell(new Vector2D(col, row))
  })

  const cellOffset = new Vector2D(parseInt(form.cell.offsetX.value), parseInt(form.cell.offsetY.value))

  const tileSize = new Vector2D(parseInt(form.tile.width.value), parseInt(form.tile.height.value))
  const renderGrid = new RenderGrid(canvas)

  renderGrid._draw([grid, tileSize, cellOffset, form.colours.first.value, form.colours.second.value])
}

export default demo1
