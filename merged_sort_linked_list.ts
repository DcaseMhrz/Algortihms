import { LinkedList } from './Linked_List'

function mergeSort(linked_list: LinkedList | null) {
  /**
   * Sorts the Linked list in ascending order 
   * Takes in the linked list as parameter
   * 
   * Steps
   * - Recursively split the list into sublist until it contains a single node in the sublist
   * - Repeatedly merge the sublist to produce the sorted sublist until one remains
   * 
   * Returns the sorted Linked List
   * Takes O(nlogn) time
   * Takes o(n) space
   */
  if (linked_list?.size() === 1) {
    return linked_list
  }
  else if (linked_list?.head === null) {
    return linked_list
  }

  let { left_half, right_half } = split_linkedList(linked_list)

  let left_list = mergeSort(left_half)
  let right_list = mergeSort(right_half)

  let mergedLinkedList = merge(left_list, right_list)

  return mergedLinkedList


}

function split_linkedList(linked_list: LinkedList | null) {
  /**
   * Divide the unsorted list at midpoint into sublists
   * Takes O(log n) time
   */

  if (linked_list === null || linked_list.head === null) {
    let left_half = linked_list
    let right_half = null

    return { left_half, right_half }
  }
  else {
    let midpoint = Math.floor(linked_list.size() / 2)
    let mid_node = linked_list.node_in_index(midpoint - 1)
    let left_half = linked_list
    let right_half = new LinkedList()
    if (mid_node) {
      right_half.head = mid_node.next_node
      mid_node.next_node = null
    }
    return { left_half, right_half }

  }

}

function merge(left: LinkedList, right: LinkedList) {
  /**
   * merges two linked list, sorting the data in nodes 
   * Returns a new merged linked list 
   * takes O(n) space
   * Runs in O(n) time
   */
  let merged = new LinkedList();
  merged.add(0)
  let current = merged.head;
  let left_head = left.head;
  let right_head = right.head;

  while (left_head || right_head) {
    if (left_head !== null && (right_head === null || left_head.data < right_head.data)) {
      if (current) {
        current.next_node = left_head;
        left_head = left_head.next_node;
      }
    } else if (right_head !== null) {
      if (current) {
        current.next_node = right_head;
        right_head = right_head.next_node;
      }
    }

    if (current) {
      current = current.next_node;
    }
  }

  if (current) {
    let head = merged.head?.next_node;
    if (head) {
      merged.head = head;
    }
  }

  return merged;
}

let l = new LinkedList()

l.add(10)
l.add(23)
l.add(43)
l.add(45)
l.add(76)
l.add(12)
l.add(56)
l.add(48)

console.log(l.toString())
const sortedLinkedList = mergeSort(l)

console.log(`Sorted Linked List:`, sortedLinkedList.toString())

