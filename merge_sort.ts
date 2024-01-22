function merge_sort(list: number[]): number[] {

  /**
   * Takes in the list unsorted and returns the sorted list 
   * 
   * Divide and conquer
   * 
   * Divide: Split the list into equal sublist until the list size is only 1 or 0
   * Conquer: Merge the list and while merging make the comparison of the values from the previous step
   * 
   * Takes total of O(kn log(n)) time
   */

  if (list.length <= 1)
    return list

  let l: number[] = []



  let { left, right } = split(list)
  let sortedList = sortedMerge(merge_sort(left), merge_sort(right))

  l = sortedList
  return l
}

function split(list: number[]) {
  /**
   * Takes in the list of numbers and split it in half and returns two lists
   * Takes O(klog(n)) time
   */
  const midpoint = Math.floor(list.length / 2)

  let left: number[] = list.slice(0, midpoint)
  let right: number[] = list.slice(midpoint,)

  return { left, right }
}

function sortedMerge(left: number[], right: number[]) {
  /**
   * Takes 2 lists and compares value from one list with another 
   * pushes the value in the list 
   * returns the new sorted list
   * 
   * Takes O(n) time
   */

  let list: number[] = [];
  let i: number = 0;
  let j: number = 0


  while (i < left.length && j < right.length) {

    if (left[i] < right[j]) {
      list.push(left[i])
      i++
    }
    else {
      list.push(right[j])
      j++
    }

  }
  while (i < left.length) {
    list.push(left[i])
    i++
  }
  while (j < right.length) {
    list.push(right[j])
    j++
  }

  return list

}



let alist = [11, 5, 66, 75, 32, 33, 65, 99, 10, 40, 22, 38, 54, 78, 45, 21, 56]

console.log(merge_sort(alist))

let sortedList = merge_sort(alist)


function verifySort(list: number[]): Boolean {
  if (list.length <= 1) {
    return true
  }
  else {
    return list[0] < list[1] && verifySort(list.slice(1))
  }
}
console.log(verifySort(alist))
console.log(verifySort(sortedList))