class Graph {

  constructor() {
    this.nodes = [];
  }

  addNode(value) {
    this.nodes.push({
      value: value,
      lines: []
    });
  }

  find(value) {
     return this.nodes.find(function(node) {
       return node.value === value;
     });
   }

  addLine(startValue, endValue) {
    // Find the nodes for each value.
    var startNode = this.find(startValue);
    var endNode = this.find(endValue);

    // Freak out if we didn't find one or the other.
    if (!startNode || !endNode) {
      throw new Error('Both nodes need to exist');
    }

    // And add a reference to the endNode from the startNode.
    startNode.lines.push(endNode);
  }
}

module.exports = Graph;
