const assert = require('assert');
const Tree = require('../Utils/Tree/Tree');
const Node = require('../Utils/Tree/Node');

describe('Tree', () => {

    it('can create', () => {
        let nodes = [],
            tree = new Tree();

        for(let i = 0; i < 7; ++i) {

            nodes.push(new Node(i + 1));
        }

        nodes[0].addChildren([nodes[1], nodes[2]]);
        nodes[1].addChildren([nodes[3], nodes[4]]);
        nodes[2].addChildren([nodes[5], nodes[6]]);

        tree.root = nodes[0];

        assert(tree.root.data == 1);
        assert(tree.root.parents == undefined);
        assert(tree.root.children[0].parents[0].data == tree.root.children[1].parents[0].data == 1);
    });
});
