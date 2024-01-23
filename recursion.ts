const sum = (array: number[]): number => {
  /**
   * Takes in the array of numbers returns the sum of the numbers in the list 
   * 
   * - calls itself with the list excluding the first number in the array until the list is empty
   * - returns the added value 
   * 
   * Takes O(n)  time
   * Takes in O(n) space
   */
  let total: number = 0

  if (!array.length)
    return total

  total = array[0] + sum(array.slice(1,))
  console.log(total)

  return total
}

console.log(sum([1, 2, 3, 4, 5]))
