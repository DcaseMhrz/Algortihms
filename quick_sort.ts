function quick_sort(array: number[]): number[] {
  /**
   * Quick Sort Algorithms sorts the array by taking a pivot point and slicing the array in half 
   * deciding if its less or greater than the pivot point then calls itself on both halves 
   * until the list is either empty or contains 1 item which is naively sorted
   * 
   * - Get PIVOT number which in this case we are taking the first element
   * - Compare all the elements on the list with PIVOT number
   * - create a 2 sub array which will store greater and lower values than the PIVOT number
   * - Call itself on those sublist
   * - Returns itself if the array contains 1 or 0 items
   * 
   * 
   * Time Complexity: O(n log(n)) in average case, O(n^2) in worst case
   * Space Complexity: O(log(n)) due to the recursive call stack
   */

  if (array.length <= 1) {
    return array
  }
  else {
    let less_than: number[] = []
    let greater_than: number[] = []
    let pivot: number = array[0]

    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        less_than.push(array[i])
      }
      else {
        greater_than.push(array[i])
      }
    }
    let l = quick_sort(less_than)
    let g = quick_sort(greater_than)
    return [...l, pivot, ...g] //spreading the sorted list to return it

  }


}

const array2 = [1, 33, 4, 3, 5, 6, 7, 56, 34, 12, 23, 24, 56, 76, 84, 23, 45, 76, 45, 90, 32]

console.log(quick_sort(array2))

