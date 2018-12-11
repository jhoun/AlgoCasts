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

function pyramid(n, row = 0, level = '') {
   if (row === n){
     return;
   }

   if (level.length === 2 * n - 1){
     console.log(level)
     row++
     return pyramid(n, row)
   }

  const midpoint = Math.floor((2 * n - 1) / 2)
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
        level += '#';
  }
  else {
        level += ' ';
  }

  pyramid(n, row, level);
}

module.exports = pyramid;


// Solution #1
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2)
//   for (let row = 0; row < n; row++) {
//     let level = '';
//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       }
//       else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

// pyramid(3)
// 1st row loop
  // 1st column loop 2 - 0 <= 0 && 2 + 0 >= 0 // false
  // 2nd column loop 2 - 0 <= 1 && 2 + 0 >= 1 // false
  // 3rd column loop 2 - 0 <= 2 && 2 + 0 >= 2 // true
  // 4th column loop 2 - 0 <= 3 && 2 + 0 >= 3 // false
  // 5th column loop 2 - 0 <= 4 && 2 + 0 >= 4 // false

// 2nd row loop
  // 1st column loop 2 - 1 <= 0 && 2 + 1 >= 0 // false
  // 2nd column loop 2 - 1 <= 1 && 2 + 1 >= 1 // true
  // 3rd column loop 2 - 1 <= 2 && 2 + 1 >= 2 // true
  // 4th column loop 2 - 1 <= 3 && 2 + 1 >= 3 // true
  // 5th column loop 2 - 1 <= 4 && 2 + 1 >= 4 // false

// 3rd row loop
  // 1st column loop 2 - 2 <= 0 && 2 + 2 >= 0 // true
  // 2nd column loop 2 - 2 <= 1 && 2 + 2 >= 1 // true
  // 3rd column loop 2 - 2 <= 2 && 2 + 2 >= 2 // true
  // 4th column loop 2 - 2 <= 3 && 2 + 2 >= 3 // true
  // 5th column loop 2 - 2 <= 4 && 2 + 2 >= 4 // true

