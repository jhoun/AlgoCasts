// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


/* Solution #3 */
function anagrams(stringA, stringB) {
  return modifyString(stringA) === modifyString(stringB);
}

const modifyString = (str) => {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;

/* Solution #1 */
// function anagrams(stringA, stringB) {
//   const modifyString = (str) => {
//     return str.replace(/[^\w]/g, '').toLowerCase();
//   }
//   const strA = modifyString(stringA)
//   const strB = modifyString(stringB)

//   for (let i = 0; i < strB.length; i++) {
//     if (strA.indexOf(strB[i]) === -1) {
//       return false
//     }
//   }
//   return true
// }

/* Solution #2 */
// function anagrams(stringA, stringB) {
//   const strA = modifyString(stringA)
//   const strB = modifyString(stringB)

//   return strB.every((letter) => {
//     return strA.indexOf(letter) !== -1;
//   })
// }

// const modifyString = (str) => {
//   return str.replace(/[^\w]/g, '').toLowerCase().split('');
// }