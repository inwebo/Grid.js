/**
 * Graph representation by references to Node object
 */
export default class Graph {
    getNodes() {
        return this._nodes;
    }

    /**
     * @param {Iterable} nodes
     */
    constructor(nodes) {
        this._nodes = nodes;
    }
}