const assert = require('assert');
const Graph = require('../Utils/Graph');

describe('Graph', () => {

    let graph;

    beforeEach(() => {
        graph = new Graph();
    })

    it('can add nodes', () => {
        let node = {
                value: 5
            };

        assert(Object.keys(graph.nodes).length == 0);
        node = graph.addNode(node);
        assert(Object.keys(graph.nodes).length == 1);
        assert(graph.nodes[node._id].value == 5);
    });

    it('can remove nodes', () => {
        let node = {
                value: 5
            };

        graph.addNode(node);
        assert(Object.keys(graph.nodes).length == 1);
        graph.removeNode(node._id);
        assert(Object.keys(graph.nodes).length == 0);
    });

    it('can add an edge', () => {
        let edge,
            startNode = {
                value: 1
            },
            endNode = {
                value: 2
            };

        startNode = graph.addNode(startNode);
        endNode = graph.addNode(endNode);

        assert(Object.keys(graph.edges).length == 0);
        edge = graph.addEdge(startNode, endNode);
        assert(Object.keys(graph.edges).length == 1);
        assert(graph.edges[edge._id].start === startNode._id);
        assert(graph.edges[edge._id].end === endNode._id);
        assert(startNode._inEdges.length == 0);
        assert(startNode._outEdges.length == 1);
        assert(endNode._inEdges.length == 1);
        assert(endNode._outEdges.length == 0);
        assert(startNode._outEdges[0]._id === edge._id);
        assert(endNode._inEdges[0]._id === edge._id);
    });

});
