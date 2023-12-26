function recursive_binary_search(list: number[], target: number): boolean {
  /**
   * takes a list of numbers and the target and returns boolean if the target is found in the list 
   */


  if (list.length === 0) return false
  else {
    let midpoint: number = Math.floor(list.length / 2)
    if (list[midpoint] === target) return true
    if (midpoint < target) {
      return recursive_binary_search(list.slice(midpoint + 1, list.length - 1), target)
    }
    else {
      return recursive_binary_search(list.slice(0, midpoint), target)
    }
  }

}

function verify(result: boolean) {
  console.log(`Target found ${result}`)

}

import { numbers } from "./linear_search"

const result = verify(recursive_binary_search(numbers, 12))
const result2 = verify(recursive_binary_search(numbers, 2))
