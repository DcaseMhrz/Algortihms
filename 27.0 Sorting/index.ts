

function bubbleSort(arr: number[]) {

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr

}

function selectionSort(arr: number[]) {

  for (let i = 0; i < arr.length; i++) {

    let indexofmin = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[indexofmin] > arr[j]) {
        indexofmin = j
      }
    }
    if (indexofmin !== i) {
      const lowest = arr[indexofmin]
      arr[indexofmin] = arr[i]
      arr[i] = lowest
    }
  }
  return arr


}


function mergeSort(arr: number[]): number[] {

  if (arr.length === 1) {
    return arr
  }
  let midpoint = Math.floor(arr.length / 2)

  const left = mergeSort(arr.slice(0, midpoint))
  const right = mergeSort(arr.slice(midpoint))

  return merge(left, right)


}

function merge(arr1: number[], arr2: number[]): number[] {

  let results: number[] = []

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      results.push(arr1.shift()!)
    }
    else {
      results.push(arr2.shift()!)
    }
  }

  return [...results, ...arr1, ...arr2]
}

export { bubbleSort, selectionSort, mergeSort, merge }