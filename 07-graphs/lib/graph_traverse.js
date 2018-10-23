'use strict';

class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(value, neighbors) {
    if (!value) {
      throw new Error('Must include a value');
    }
    this.vertices[value] = neighbors;
  }

  breadthFirstTraversal(vertex) {
    if (!vertex) {
      throw new Error('Must include a starting vertex');
    }
    let visited = [];
    let traverseQueue = [];

    traverseQueue.push(vertex);

    while (traverseQueue.length) {
      let visitedVertex = traverseQueue.shift();
      if (!visited.includes(visitedVertex)) {
        visited.push(visitedVertex);
      }
      this.vertices[visitedVertex].forEach(neighbors => {
        if (!visited.includes(neighbors)) {
          traverseQueue.push(neighbors);
        }
      });
    }

    return visited;
  }

  depthFirstTraversal(vertex) {
    let stack = [];
    let visited = [];

    stack.push(vertex);

    //peek
    while (stack.length > 0) {
      let top = stack[stack.length - 1];


      if (!visited.includes(top)) {
        visited.push(top);
      }

      let hasUnvisitedChildren = false;


      this.vertices[top].forEach(neighbor => {
        if (!visited.includes(neighbor)) {
          hasUnvisitedChildren = true;
          stack.push(neighbor);
        }
      });

      if (!hasUnvisitedChildren) {
        stack.pop();
      }
    }
    return visited;


  }
}

module.exports = Graph;

//neighbors.forEach((element))

//ensure neighbors are in graph add if not
//if neighbor[i] not in graph - addvertext(nieghbor[i], value)
