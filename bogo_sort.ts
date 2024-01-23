

function isSorted(list: number[]): boolean {
  /**
   * Takes in a list of numbers and returns true if sorted and false if unsorted
   * 
   * Takes O(n) time
   */

  for (let i = 1; i < list.length; i++) {
    if (list[i - 1] > list[i])
      return false
  }
  return true
}

function shuffle(array: number[]) {
  /**
   * Takes in the array as the parameter and shuffles the array by randomizing the index number and swapping it
   * 
   * Takes o(n) time
   */
  var swapIndex: number = array.length;
  var temp: number, randomIndex: number;
  while (swapIndex !== 0) {

    randomIndex = Math.floor(Math.random() * swapIndex);

    swapIndex -= 1;

    temp = array[swapIndex];
    array[swapIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
}

function bogo_sort(list: number[]) {
  /**
   * Bogo Sort: An Sorting algorithms which takes in the array of numbers and sorts it by shuffling it 
   * Returns the sorted array and also prints the number of attempts it took to get the sorted array.
   * 
   * Takes O(n^2) time
   * 
   * Takes O(1) space
   */
  let attempt: number = 0;

  while (!isSorted(list)) {
    list = shuffle(list);
    attempt++;
  }

  console.log(`Sorted after ${attempt} attempts`);
  return list;
}


const unsortedList = [45, 11, 98, 36, 52, 87]

console.log(bogo_sort(unsortedList))