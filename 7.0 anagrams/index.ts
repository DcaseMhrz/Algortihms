
// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


//SOLUTION 1

// export default function anagram(stringA: string, stringB: string) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//   console.log(aCharMap, bCharMap)

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false
//   }

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false
//     }
//   }
//   return true


// }
// function buildCharMap(str: string) {
//   const charMap: { [key: string]: number } = {};

//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1
//   }
//   return charMap
// }




// SOLUTION 2

// export default function anagram(stringA: string, stringB: string): boolean {
//   const stringACleaned = stringA.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();


//   const stringBCleaned = stringB.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();


//   let stringAObject: { [key: string]: number } = {}
//   let stringBObject: { [key: string]: number } = {}

//   for (let char of stringACleaned) {
//     if (stringAObject[char]) {
//       stringAObject[char]++
//     }
//     else {
//       stringAObject[char] = 1
//     }
//   }
//   for (let char of stringBCleaned) {
//     if (stringBObject[char]) {
//       stringBObject[char]++
//     }
//     else {
//       stringBObject[char] = 1
//     }
//   }

//   if (Object.keys(stringAObject).length !== Object.keys(stringBObject).length) {
//     return false
//   }
//   else {
//     for (let char in stringAObject) {
//       if (stringAObject[char] !== stringBObject[char]) return false
//     }
//     return true
//   }

// }

export default function anagram(stringA: string, stringB: string) {
  return cleanString(stringA) === cleanString(stringB)

}
function cleanString(str: string) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}