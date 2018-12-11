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

function steps(n, row = 0, stair = '') {
  // if row increments to n, then we are done
  if(row === n){
    return;
  }

  // We have reached the end of our row
  if (stair.length === n){
    console.log(stair);
    row++
    return steps(n, row) //<-- need to return so it doesn't run any code below
  }

  if (stair.length <= row){
    stair += '#';
  }
  else {
    stair += ' ';
  }

  steps(n, row, stair)
}

module.exports = steps;


/* Solution #1 */
// function steps(n) {

//   for (let row = 0; row < n; row++) {
//     let stair = '';
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#'
//       } else {
//         stair += ' '
//       }
//     }
//     console.log(stair)
//   }
// }

// 1st loop 0 <= 0 true
// 2nd loop 1 <= 0 false
// 3rd loop 2 <= 0 false

// 4th loop 0 <= 1 true
// 5th loop 1 <= 1 true
// 6th loop 2 <= 1 false

// 7th loop 0 <= 2 true
// 8th loop 1 <= 2 true
// 9th loop 2 <= 2 true