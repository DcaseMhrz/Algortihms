// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

export default function capitalize(str: string) {

  let capitalizedString = str[0].toUpperCase()

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') capitalizedString += str[i].toUpperCase()
    else capitalizedString += str[i]
  }

  return capitalizedString

}


// export default function capitalize(str: string) {

//   let capitalizedString = []
//   const words = str.split(' ')

//   for (let word of words) {
//     let firstChar = word[0].toUpperCase()
//     capitalizedString.push(firstChar + word.slice(1))

//   }

//   return capitalizedString.join(' ')

// }

