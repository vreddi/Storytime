class Node {

    constructor(data) {
        this.data = data;
    }

    addChildren(nodes) {

        this.children = this.children || [];

        // Add children for the node
        this.children = this.children.concat(nodes);

        // For each new child node, add the current node as a parent
        nodes.forEach(node => {
            node.parents = node.parents || [];
            node.parents.push(this);
        });
    }
}

module.exports = Node;
