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
    addNeighbors(key, node) {
        this._neighbors.set(key, node);
    }

    /**
     * @return {Map}
     */
    getNeighbors() {
        return this._neighbors;
    }

    getNeighbor(key) {
        return this._neighbors.get(key);
    }

    /**
     * @param key
     * @return {boolean}
     */
    hasNeighbor(key) {
        return this._neighbors.has(key);
    }
}