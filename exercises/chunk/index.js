// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/* Solution #2 */
function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while(index < array.length){
    chunked.push(array.slice(index, index + size))
    index += size;
  }
  return chunked;
}

/* Iteration */
// const array = [1, 2, 3, 4];
// 1st loop
  // index = 0
  // [1, 2, 3, 4].slice(0, 2);
  // chunked = [[1, 2]]
// 2nd loop
  // index = 2
  // [1, 2, 3, 4].slice(2, 4)
  // chunked = [[1, 2], [3, 4]]


module.exports = chunk;

/* Solution #1 */
// function chunk(array, size) {
//   let chunked = [];
//   for (var i = 0; i < array.length; i++) {
//     const last = chunked[chunked.length - 1];
//     if (last === undefined || last.length === size) {
//       chunked.push([array[i]])
//     } else {
//       last.push(array[i]);
//     }
//   }
//   return chunked;
// }


/* Iteration */
// const array = [1, 2, 3, 4];
// const size = 2;
// 1st loop: undefined === undefined //true, chunked = [[1]]
// 2nd loop: [1] === undefined OR [1].length !=== 2 // false, chunked = [[1,2]]
// 3rd loop: [1, 2] === undefined OR [1, 2].length === 2 // true, chunked = [[1,2], [3]]
// 4rd loop: [3] === undefined OR [1, 2].length === 2 // true, chunked = [[1,2], [3, 4]]