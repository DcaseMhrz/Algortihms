function selectionSort(list: number[]): number[] {
  /**
   * Selection Sort selects the lowest value in the array and moves it into the new sorted array
   * 
   * - find the lowest minimum value
   * - Add it to the list of the sorted values
   * - Remove it from the original list
   * 
   * Takes O(n^2) Time
   * Takes O(1) Space
   */
  let sortedList: number[] = []

  //loop until the list is empty
  while (list.length > 0) {
    let min_index = index_of_min(list) //gets the index of the lowest value
    sortedList.push(list.splice(min_index, 1)[0]) // Pushes the lowest value to the new list and splice/remove it from the original list

  }
  return sortedList
}

function index_of_min(list: number[]): number {

  /**
   * Takes in the List of numbers and finds the index of the lowest number in the list 
   * returns the index of the lowest number
   * 
   * Takes O(n) time
   * Takes O(1) space
   */
  let min = 0;

  //loops through all the elements
  for (let i = 1; i < list.length; i++) {
    if (list[i] < list[min]) min = i // saves the index of the lowest value in min
  }
  return min
}

const array = [55, 66, 77, 22, 33, 44, 11, 99]

console.log(selectionSort(array))