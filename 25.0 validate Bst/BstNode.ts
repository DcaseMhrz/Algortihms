// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

export default class BstNode {

  data: any
  left: any
  right: any

  constructor(data: any) {
    this.data = data
    this.left = null
    this.right = null
  }

  insert(data: any) {
    if (data < this.data) {
      if (this.left !== null) {
        this.left.insert(data)
      }
      else {
        this.left = new BstNode(data)
      }
    }
    else {
      if (this.right !== null) {
        this.right.insert(data)
      }
      else {
        this.right = new BstNode(data)
      }

    }

  }

  contains(data: any): BstNode | null {
    if (data === this.data) return this
    if (data < this.data && this.left) {
      return this.left.contains(data)
    }
    else if (data > this.data && this.right) {
      return this.right.contains(data)
    }

    return null
  }

}