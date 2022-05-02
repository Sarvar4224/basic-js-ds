const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
/*class Node {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}*/

class BinarySearchTree {

    constructor() {
        this.rootNode = null
    }

    root ()
    {
      return this.rootNode
    }
    add(data) {
        const node = this.rootNode
        if (node === null) {
            this.rootNode = new Node(data)
            return
        } 
        else {
            const searchTree = function(node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data)
                        return
                    } 
                    else if (node.left !== null) 
                        return searchTree(node.left)
                } 
                else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data)
                        return
                    } 
                    else if (node.right !== null) 
                        return searchTree(node.right)
                } 
                else 
                    return null
            }
            return searchTree(node)
        }
    }


    has(data) {
    let current = this.rootNode
    while (current) {
        if (data === current.data)
            return true

      if( data < current.data) 
      current = current.left 
      else 
      current = current.right
    }
    return false
    }

  find(data) {
    let current = this.rootNode
        while (current.data !== data) {
          
            if (data < current.data) 
            current = current.left

            else
            current = current.right

            if (current === null) 
            return null
        }
        return current
  }

  remove(data) {
  this.rootNode = removeNode(this.rootNode, data)
  function removeNode(node, data) {
    if (!node)
    return null;

    if (data<node.data)
    {
      node.left=removeNode(node.left, data)
      return node
    }
    else if (node.data<data )
    {
      node.rigth=removeNode(node.right, data)
      return node 
    }
    else {
      if (!node.left && !node.rigth)
      return null
    }
    if(!node.left)
    {
      node=node.right
      return node;
    }
    if(!node.rigth)
    {
      node=node.left;
      return node;
    }
    let minFromRight = node.right;
    while (minFromRight.left)
    {
      minFromRight=minFromRight.left;
    }
    node.data=minFromRight.data;

    node.right = removeNode(node.right, minFromRight.value);

    return node;
  }
}


  min() {
    let current = this.rootNode
        while (current.left !== null) {
            current = current.left
        }
        return current.data
  }

  max() {
    let current = this.rootNode
        while (current.right !== null) {
            current = current.right
        }
        return current.data
  }
}
/*const tree = new BinarySearchTree();

tree.add(1);

tree.add(2);

tree.add(3);

tree.add(4);

tree.add(5);

tree.root().data;*/
module.exports = {
  BinarySearchTree
};