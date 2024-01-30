// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

export default function pyramid(int: number, row: number = 0, stairs: string = '') {
  const boxesInRow = (int * 2) - 1
  const midpoint = Math.floor((boxesInRow) / 2)
  if (row === int) return

  if (stairs.length === boxesInRow) {
    console.log(stairs)
    pyramid(int, row + 1, '')
    return
  }

  if (stairs.length < boxesInRow) {
    if (midpoint - row <= stairs.length && midpoint + row >= stairs.length) stairs += '#'
    else stairs += ' '
  }
  pyramid(int, row, stairs)



}

// export default function pyramid(int: number) { 
//   let boxes =row (int * 2) - 1 
//   let midpoint = Math.floor(boxes / 2) 
//   for (let row = 0; row < int; row++) {  
//     let stairs = ''
//     for (let col = 0; col < boxes; col++) { 
//       if (midpoint + row >= col && midpoint - row <= col) {
//         stairs += '#'
//       }
//       else {
//         stairs += ' '
//       }
//     }
//     console.log(stairs)
//   }
// }