// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

export default function matrix(n: number): number[][] {
  const result: number[][] = []

  for (let i = 0; i < n; i++) {
    result.push([])
  }

  let counter = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startColumn = 0;
  let endColumn = n - 1;

  while (startRow <= endRow && startColumn <= endColumn) {

    //Top Row
    for (let i = startColumn; i <= endColumn; i++) {
      result[startRow][i] = counter;
      counter++
    }
    startRow++

    // Right Column
    for (let i = startRow; i <= endRow; i++) {
      result[i][endColumn] = counter;
      counter++
    }
    endColumn--

    //Bottom Row
    for (let i = endColumn; i >= startColumn; i--) {
      result[endRow][i] = counter;
      counter++
    }
    endRow--

    //Left Column
    for (let i = endRow; i >= startRow; i--) {
      result[i][startColumn] = counter;
      counter++
    }
    startColumn++


  }

  return result
}
