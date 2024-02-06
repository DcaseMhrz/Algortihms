
import Stack from './stack'

class Queue {

  stack1: Stack
  stack2: Stack

  constructor() {
    this.stack1 = new Stack()
    this.stack2 = new Stack()

  }

  add(data: any) {
    this.stack1.push(data)
  }

  remove() {
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop())
    }
    const removedItem = this.stack2.pop()
    while (this.stack2.peek()) {
      this.stack1.push(this.stack2.pop())
    }
    return removedItem
  }

  peek() {
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop())
    }
    const peek = this.stack2.peek()
    while (this.stack2.peek()) {
      this.stack1.push(this.stack2.pop())
    }
    return peek
  }

}

export default Queue