const Guid = require('guid');
const Exception = require('./Exception');

class Graph {

        constructor() {
            this.nodes = {};
            this.edges = {};
            this.numberOfEdges = 0;
        }

        addNode(node) {
            this._checkForInvalidNodes([node]);

            node['_id'] = Guid.create().value;
            node['_inEdges'] = [];
            node['_outEdges'] = [];

            this.nodes[node._id] = node;

            return node;
        }

        removeNode(id) {
            delete(this.nodes[id]);
        }

        addEdge(start, end) {
            this._checkForInvalidNodes([start, end]);

            let edge = {
                    _id: Guid.create().value,
                    start: start._id,
                    end: end._id
                }

            this.edges[edge._id] = edge;
            start._outEdges.push(edge);
            end._inEdges.push(edge);

            return edge;
        }

        _checkForInvalidNodes(nodes){
            for(let node of nodes) {
                if(node === undefined) {
                    throw Exception.NullReferenceException("Null not expected for a graph node.");
                }
                else if(Array.isArray(node) || typeof(node) !== "object") {
                    throw Exception.InvalidTypeException("Invalid type provided. Graph nodes expect valid objects.");
                }
            }
        }
}

module.exports = Graph;
