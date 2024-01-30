// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

export default function vowels(str: string): number {

  const matches = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0
}

// export default function vowels(str: string): number {

//   const vowels = ['a', 'e', 'i', 'o', 'u']
//   const arr = str.toLowerCase().split('')
//   let counter: number = 0

//   for (let char of arr) {
//     if (vowels.includes(char)) counter++
//   }
//   return counter
// }