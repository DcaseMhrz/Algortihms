function mergeSortv2(array: number[]): number[] {
  /**
   * Merge Sort Algorithm
   * Takes in the array and returns the sorted array 
   * 
   * Divide and conquer
   * 
   * Divide: Split the list into equal sublist until the list size is only 1 or 0
   * Conquer: Merge the list and while merging make the comparison of the values from the previous step
   * 
   * Takes total of O(n log(n)) time
   */

  if (array.length <= 1)
    return array

  let midpoint: number = Math.floor(array.length / 2)
  let first_half: number[] = mergeSortv2(array.slice(0, midpoint))
  let second_half: number[] = mergeSortv2(array.slice(midpoint,))
  let sortedlist: number[] = []

  let first_index = 0
  let second_index = 0
  while (first_index < first_half.length && second_index < second_half.length) {
    if (first_half[first_index] < second_half[second_index]) {
      sortedlist.push(first_half[first_index])
      first_index++
    }
    else {
      sortedlist.push(second_half[second_index])
      second_index++
    }

  }
  sortedlist = [...sortedlist, ...first_half.slice(first_index,)]
  sortedlist = [...sortedlist, ...second_half.slice(second_index,)]

  return sortedlist


}

const l = [33, 45, 67, 86, 32, 45, 12, 43, 78, 92, 18, 59]

console.log(mergeSortv2(l))