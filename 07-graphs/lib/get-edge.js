'use strict';

class WeightedGraph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(value) {
    this.adjList.set(value, new Map());
  }

  addEdge(src, dest, weight) {
    this.adjList.get(src).set(dest, weight);
    this.adjList.get(dest).set(src, weight);
  }

  getEdge(src, dest) {
    if (!src || !dest) {
      throw new Error('Inport Error');
    }

    let hasEdge = this.adjuList.has(src) && this.adjList.get(src).has(dest);

    if (hasEdge) {
      return this.adjList.get(src).get(dest);
    }
  }
  totalWeightOf(path) {
    let cost = 0;

    let hasPath = path.every((vertex, idx, arr) => {
      let weight;
      if (arr[idx + 1]) {
        weight = this.getEdge(vertex, arr[idx + 1]);
      } else {
        return true;
      }

      if (weight) {
        cost += weight;
        return true;

      } else {
        cost = 0;
        return false;
      }
    });
    return [hasPath, cost];
  }
  printAdjList() {
    let msg = ``;
    for (let [vertex, value] of this.adjList) {
      msg += `${vertex}: `;
      for (let [key, value] of this.adjList.get(vertex)) {
        msg += `[${key}, ${value}] `;
      }

      msg += '\n';
    }
    console.log(msg);
  }
}

module.exports = WeightedGraph;