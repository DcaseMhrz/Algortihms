class EachNode {
  /**
   * An Object for Storing a single node of a linked List
   * Models two attributes - data and the link to the next node in the list
   */

  public data: number;
  public next_node: EachNode | null;

  constructor(data: number, next_node = null) {
    this.data = data
    this.next_node = next_node
  }

  toString() {
    return `Node data: ${this.data}`
  }


}

class LinkedList {
  /**
   * Singly Linked List
   */

  public head: EachNode | null

  constructor(head: EachNode | null = null) {
    this.head = head
  }

  public isEmpty(): boolean {
    return this.head === null
  }

  public size(): number {
    /**
     * Returns the number of nodes in the list 
     * takes O(n) time
     */
    let current = this.head
    let count: number = 0

    while (current) {
      count += 1
      current = current.next_node

    }
    return count
  }

  public add(data: number) {
    /**
     * Adds a new node containing data at the head of the list 
     * This operation takes O(1) time
     */
    let new_node = new EachNode(data)
    new_node.next_node = this.head
    this.head = new_node
  }

  public search(data: number) {
    /**
     * Search for the first node containing data that matches the key
     * Returns the node or null if not found
     * 
     * Takes O(n) time
     */
    let current: EachNode | null = this.head

    while (current) {
      if (current?.data === data) {
        return current
      }
      else {
        current = current?.next_node
      }

    }
    return 'Not Found'

  }

  public insert(value: number, index: number) {
    /**
     * Inserts a new node containing data at the index position
     * insertion takes O(1) time but finding the node at the insertion node takes O(n) time
     * 
     * Takes overall O(n) time
     */

    if (index == 0) this.add(value)
    else {
      const newNode = new EachNode(value)
      let current = this.head
      let position = index
      while (position > 1 && current !== null) {
        current = current.next_node
        position -= 1
      }

      if (current !== null) {
        let previous_node = current
        let next_node = current?.next_node
        previous_node.next_node = newNode
        newNode.next_node = next_node
      }

    }
  }

  public remove(value: number) {
    /**
     * Removes Node containing the data that matches the value 
     * Returns the node or Null if value doesnt exist
     * Takes O(n) time
     */


    let current: EachNode | null = this.head
    let previous: EachNode | null = null;
    let found: boolean = false

    while (current && !found) {
      if (current.data === value && current === this.head) {
        found = true
        this.head = current.next_node
      }
      else if (current.data === value) {
        found = true
        if (previous) {
          previous.next_node = current.next_node
        }
      }
      else {
        previous = current
        current = current.next_node
      }

    }
    return current + ''

  }




  toString() {
    /**
     * Returns the string representation of the linked list just like __repr__ in python
     */
    let current = this.head
    let nodes: string[] = []
    while (current) {
      if (current === this.head) nodes.push(`[Head: ${current.data}]`)
      else if (current.next_node === null) nodes.push(`[Tail: ${current.data}]`)
      else nodes.push(`[${current.data}]`)
      current = current.next_node
    }

    return `LinkedList: ${nodes.join('->')}`

  }

}



// const N1: EachNode = new EachNode(10)
// console.log(N1)
// const N2 = new EachNode(20)
// N1.next_node = N2
// console.log(N1)
// console.log(N1.next_node)



console.warn(`Creating a new LinkedList`)
const l = new LinkedList()
console.warn(`Adding values 10,20,30`)
l.add(10)
l.add(20)
l.add(30)
console.warn(`Size of the list is `)
console.log(l.size())
console.warn(`--------------------------------`)
console.log(l.toString())
console.warn('Seach Operation Searching for 0')
console.log(l.search(0)?.toString())

console.warn(`Insert Operation `)
console.warn(`inserting 35 in index 2 `)
l.insert(35, 2)
console.log(l.toString())
console.warn(`--------------------------------`)
console.warn(`inserting 333 in index 0 `)
l.insert(333, 0)
console.log(l.toString())


console.warn(`--------------------------------`)
console.warn(`Remove Operation `)
console.warn(`removing 35`)
console.log(l.remove(35))
console.log(l.toString())