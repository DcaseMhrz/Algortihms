
// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


export default function steps(int: number, row: number = 0, stairs: string = '') {

  if (int === row) {
    return
  }
  if (stairs.length === int) {
    console.log(stairs)
    return steps(int, row + 1, '')
  }
  if (stairs.length <= row) {
    stairs += '#'
  } else {
    stairs += ' '
  }
  steps(int, row, stairs)


}
// export default function steps(int: number) {
//   for (let row = 0; row < int; row++) {
//     let line = ''
//     for (let column = 0; column < int; column++) {
//       if (column <= row) {
//         line += '#'
//       }
//       else {
//         line += ' '
//       }
//     }
//     console.log(line)
//   }

// }