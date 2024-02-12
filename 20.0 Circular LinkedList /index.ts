// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

import { LinkedList } from "./LinkedList";

export default function circular(list: LinkedList): boolean {

  let slow = list.head
  let fast = list.head

  while (fast.next && fast.next.next) {

    slow = slow.next
    fast = fast.next.next
    if (fast === slow) return true
  }

  return false

}