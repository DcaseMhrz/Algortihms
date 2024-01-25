

// function reverseString(str: string) {
//   return str.split('').reverse().join('')
// }

// function reverseString(str: string) {
//   let revString: string = '';
//   for (const char of str) {
//     revString = char + revString
//   }
//   return revString
// }


function reverseString(str: string) {
  return str.split('').reduce((reversed: string, char: string) => {
    return char + reversed
  }, '')
}

export default reverseString