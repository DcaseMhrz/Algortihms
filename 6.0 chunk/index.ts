// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// export default function chunk(arr: number[], n: number) {

//   let newArray = []
//   let subArray = []
//   for (let eachnumber of arr) {

//     subArray.push(eachnumber)
//     if (subArray.length === n) {
//       newArray.push(subArray)
//       subArray = []
//     }
//   }
//   if (subArray.length !== 0) {
//     newArray.push(subArray)
//   }
//   return newArray

// }

// export default function chunk(arr: number[], n: number) {
//   const chunked = []

//   for (let element of arr) {
//     const lastElement: number[] = chunked[chunked.length - 1]
//     if (!lastElement || lastElement.length === n) {
//       chunked.push([element])
//     }

//     else {
//       lastElement.push(element)
//     }
//   }
//   return chunked
// }

export default function chunked(arr: number[], n: number) {
  const chunked: number[][] = []

  let index = 0

  while (index < arr.length) {
    chunked.push(arr.slice(index, index + n))
    index = index + n
  }
  return chunked

}