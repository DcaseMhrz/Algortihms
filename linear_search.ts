function linearSearch(list: number[], target: number): number | null {
  /**
   * Takes in List of numbers and target
   * Returns the index of the target in the list or null
   */

  let x: number | null = null;

  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      x = i;
      break;
    }
  }
  return x
}

export function verify(index: number | null) {
  if (index != null) {
    console.log(`Target found at index: ${index}`)
  } else {
    console.log("Target not found in list")
  }

}

export let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

if (require.main === module) {
  const result = linearSearch(numbers, 12)
  verify(result)

  const result2 = linearSearch(numbers, 1)
  verify(result2)
}
