// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"



export default function maxChar(string: string) {
  let stringObject: { [key: string]: number } = {}

  let maxChar = ''
  let maxValue = 0

  for (let char of string) {
    if (!stringObject[char]) {
      stringObject[char] = 1
    }
    else {
      stringObject[char]++
    }

  }

  for (let char in stringObject) {
    if (stringObject[char] > maxValue) {
      maxValue = stringObject[char]
      maxChar = char
    }
  }


  return maxChar


}