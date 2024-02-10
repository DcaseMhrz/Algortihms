

// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node0 {

  data: any
  next: Node0 | any
  constructor(data: any, next: Node0 | any = null) {
    this.data = data
    this.next = next

  }

}

class LinkedList {

  head: Node0 | any

  constructor() {
    this.head = null
  }

  insertFirst(data: any) {

    this.head = new Node0(data, this.head)
  }

  size(): number {
    let count = 0;
    let current = this.head
    while (current) {
      count++
      current = current.next

    }
    return count
  }

  getFirst() {
    return this.head
  }

  getLast() {

    if (!this.head) return null

    let current = this.head

    while (current.next !== null) {
      current = current.next
    }

    return current

  }


  clear() {
    this.head = null
  }

  removeFirst() {
    this.head = this.head.next || null
  }

  removeLast() {

    if (!this.head) return null

    if (!this.head.next) return this.head = null

    let previous = this.head
    let node = this.head.next

    while (node.next !== null) {
      previous = previous.next
      node = node.next
    }
    previous.next = null
  }

  insertLast(data: any) {
    const last = this.getLast()

    if (!last) return this.head = new Node0(data)

    last.next = new Node0(data)
  }


  getAt(n: number) {

    let counter = 0;
    let current = this.head;

    while (current) {
      if (counter === n) return current;
      counter++;
      current = current.next;
    }
    return null; // Return null if index is out of bounds
  }

  removeAt(n: number) {
    if (!this.head) return null

    if (n === 0) {
      this.head = this.head.next
    }
    let previous = this.getAt(n - 1)
    if (!previous || !previous.next) return
    previous.next = previous.next.next
  }

  insertAt(data: any, n: number) {
    const insertNode = new Node0(data)
    if (!this.head) return this.head = insertNode

    if (n === 0) {
      let newNode = this.head
      this.head = insertNode
      insertNode.next = newNode
      return
    }
    const prevNode = this.getAt(n - 1)
    if (!prevNode) {
      return this.getLast().next = insertNode
    }
    const nextNode = prevNode.next
    prevNode.next = insertNode

    insertNode.next = nextNode
  }

  forEach(fn: Function) {
    let node = this.head
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++
    }
  }

  *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield node
      node = node.next
    }
  }


}

export { LinkedList, Node0 }