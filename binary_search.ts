function binary_search(list: number[], target: number): number | null {


  let first = 0
  let last = list.length - 1

  while (first <= last) {
    const midpoint = Math.floor((first + last) / 2)
    if (list[midpoint] === target) {

      return midpoint
    }
    if (list[midpoint] < target) {
      first = midpoint + 1
    }
    else {
      last = midpoint - 1
    }
  }
  return null

}

import { numbers } from './linear_search'
import { verify } from './linear_search'

const resultb = binary_search(numbers, 12)
verify(resultb)

const resultb2 = binary_search(numbers, 5)
verify(resultb2)
