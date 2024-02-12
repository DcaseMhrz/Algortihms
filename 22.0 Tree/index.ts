// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

export class TreeNode {
  data: any
  children: any
  constructor(data: any) {
    this.data = data
    this.children = []
  }

  add(data: any) {
    const newNode = new TreeNode(data)
    this.children.push(newNode)
  }

  remove(data: any) {
    this.children = this.children.filter((node: TreeNode) => {
      return data !== node.data
    })
  }

}

export class Tree {
  root: TreeNode | null

  constructor() {
    this.root = null
  }

  traverseBF(fn: Function) {
    const array = [this.root]

    while (array.length) {
      const removed = array.shift()
      array.push(...removed?.children)
      fn(removed)

    }
  }

  traverseDF(fn: Function) {
    const array = [this.root]

    while (array.length) {
      const removed = array.shift()
      array.unshift(...removed?.children)
      fn(removed)
    }
  }

}