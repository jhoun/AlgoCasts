// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let maxValue = 0;

  const obj =  str.split('').reduce((accum, curr) => {
    accum[curr] ? accum[curr]++ : accum[curr] = 1
    return accum
  }, {})

  for (let property in obj){
    if (obj[property] > max){
      max = property;
    }
  }
  return maxValue;
}

module.exports = maxChar;
