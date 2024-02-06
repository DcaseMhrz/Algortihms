// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {

  //create an array for the class
  data: any = []

  //initilize the constructor
  constructor() {
    this.data = []
  }

  //add method to add to the queue
  add(record: any) {
    this.data.unshift(record)

  }

  //Remove from the queue but also return the item in the queue to work with
  remove(): any {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1]
  }

}
export default Queue