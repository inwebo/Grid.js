import {Vector2D} from "@inwebo/vector";
import Grid from "../../../src/Grid/Grid";
import RenderGrid from "./renderGrid";
import Node from "../../../src/Graph/Node";
import RenderGraph from "./renderGraph";
import Graph from "../../../src/Graph/Graph";
import renderGrid from "./renderGrid";

window.addEventListener("DOMContentLoaded", (event) => {
    let canvas = document.getElementById('demo-1');

    // Graph
    const nodes = new Map([
        ['A', new Node()],
        ['B', new Node()],
        ['C', new Node()],
        ['D', new Node()],
        ['E', new Node()],
    ]);

    const graph = new Graph(nodes);

    // BiDirectionnal
    nodes.get('A').addNeighbor('B', nodes.get('B'));
    nodes.get('B').addNeighbor('A', nodes.get('A'));

    nodes.get('E').addNeighbor('D', nodes.get('D'));
    nodes.get('D').addNeighbor('E', nodes.get('E'));

    // !BiDirectionnal
    nodes.get('A').addNeighbor('D', nodes.get('D'));
    nodes.get('C').addNeighbor('E', nodes.get('E'));


    nodes.get('E').addNeighbor('B', nodes.get('B'));
    nodes.get('E').addNeighbor('A', nodes.get('A'));

    const renderGraph = new RenderGraph(canvas);

    renderGraph.draw(graph);

    // grid
    const dimensions = new Vector2D(40,30);
    const grid = new Grid(dimensions);

    const tileSize = new Vector2D(120,120);

    canvas = document.getElementById('demo-2');
    const renderGrid = new RenderGrid(canvas);
    renderGrid._draw([grid, tileSize]);

});
