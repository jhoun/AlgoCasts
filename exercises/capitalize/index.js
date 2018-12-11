// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/* Solution #2 */
function capitalize(str) {
  let result = '';
  str.split('').forEach((letter, i) => {
    if(str[i -1] === ' ' || str[i-1] === undefined){
      result += letter.toUpperCase();
    }
    else {
      result += letter;
    }
  })
  return result;
}

module.exports = capitalize;

/* Solution #1 */
// function capitalize(str) {
//   return str.split(' ').map(word => {
//     return word[0].toUpperCase() + word.slice(1);
//   })
//     .join(' ');
// }