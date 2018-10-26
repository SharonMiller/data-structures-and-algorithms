'use strict';

const treeIntersection = (tree1, tree2) => {
  if (!tree1 || !tree2) { throw new Error('Error: intersection requires two trees'); }
  let results = [];
  let traverseCollection = {};
  let traverseCallBack = (node) => {
    traverseCollection[node.value] = node.value;
  };
  let intersectionCb = (node) => {
    if (traverseCollection[node.value]) {
      results.push(node.value);
    }
  };

  tree1.inOrderWalk(tree1.root, traverseCallBack);
  tree2.inOrderWalk(tree2.root, intersectionCb);

  return results;
};

module.exports = treeIntersection;