/**
 * Vertice, node graph representatioon
 */
export default class Node {

    constructor() {
        /**
         * @type {Map<any, Node>}
         * @private
         */
        this._neighbors = new Map();
    }

    /**
     * @param {*} key
     * @param {Node} node
     */
    addNeighbor(key, node) {
        this._neighbors.set(key, node);
    }

    /**
     * @return {Map}
     */
    getNeighbors() {
        return this._neighbors;
    }

    /**
     * @param {*} key
     * @return {Node|boolean}
     */
    getNeighbor(key) {
        if(this.hasNeighbor(key)) {
            return this._neighbors.get(key);
        }

        return false;
    }

    /**
     * @param {*} key
     * @param {*} revertBy
     * @return {boolean}
     */
    isBiDirectional(key, revertBy) {
        if(this.hasNeighbor(key)) {
            const neighbor = this.getNeighbor(key);
            return neighbor.hasNeighbor(revertBy);
        }

        return false;
    }

    /**
     * @param key
     * @return {boolean}
     */
    hasNeighbor(key) {
        return this._neighbors.has(key);
    }
}