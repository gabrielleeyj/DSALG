// Given a list of distinct integers, find all triplets that have a sum equal to an integer n. return an empty array if an answer cannot be found.
// for example, give a list [-5, 3, 1, 0, -4, -3] and n is 0, the answer would be [(3, 1, -4), (3, 0, -3)]

let array = [-5, 3, 1, 0, -4, -3];

// O(n^3) solution
const findTriplet = (array, n) => {
  // loop through the array
  // check the values of 3 numbers and then calculate its values = n
  // once found, push the 3 values into an array.

  let found = [];

  for (let i = 0; i < array.length - 2; i++) {
    for(let j = i + 1; j < array.length - 1; j++) {
      for (let k = j + 1; k < array.length; k++) {
        if (array[i] + array[j] + array[k] === n) {
          found.push([array[i],array[j],array[k]]);
        }
      }
    }
  }
  return found;
}

console.log('O(n^3) Solution: ', findTriplet(array, 0));

// O(n^2) Solution
const findTripletSorted = (array, n) => {
  array.sort();
  let found = [];

  for (let i = 0; i < array.length; i++) {
    let j = i + 1;
    let k = array.length - 1;
    while (j < k) {
      if (array[i] + array[j] + array[k] < n) {
        j++
      } else if (array[i] + array[j] + array[k] > n) {
        k--;
      } else {
        found.push([array[i], array[j], array[k]]);
        j++
        k--
      }
    }
  }
  return found;
}

console.log('O(n^2) Solution: ', findTripletSorted(array, 0));









