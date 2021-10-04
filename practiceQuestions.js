// *   How can we divide 110 to get 10 without actually using the divide/multiply sign?

const value = 110 % 100;

console.log('value', value);

//   *   When given an array of numbers, look for the 2 numbers that can sum up to a certain number .. nar..

let arr = [1,2,2,3,4,5,6,7,8,9,9];
let uniqueArray = [...new Set(arr)];

const numSum = (array, value) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      sum = array[i] + array[j];
      if (sum === value) {
        return console.log('number', array[i], 'number',array[j]);
      }
    }
  }
}
numSum(uniqueArray, 5)

//   *   2d array – javascript - 0 spinode water and 1 land how do you scan it to find the number islands . - classic problems – how would you make it better, readable, different techniques, N cube complexity – describe how much time or space problem takes to be saved, 0 to the power n squared – gave you a list of 10 items and you need to go through the ten items 1 times, big

let map = [0,0,0,0,0,0,1,1,0,0];

const countIsland = array => {
  if (!array) {
    return Error
  }
  let count = 0;

  // O(N)
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      count += 1;
    }
  }
  return count;
}

console.log(countIsland(map));

//   *   Given an array of numbers. Find the longest set of continuous numbers and print it out

// Input: [3, 4, 10, 11, 12, 13, 5, 6, 7]
// Output:
// [10, 11, 12, 13]

let input = [3, 4, 10, 11, 12, 13, 5, 6, 7];

const contNum = arr => {
  let i = 0, longest = 1, current = 1, counts = [];

  while (i < arr.length) {
    if (arr[i] === arr[i - 1] + 1) {
      counts.push(arr[i])
      current ++
    } else {
      longest = current
      current = 1
      if (arr.length - i < counts.length) {
        return counts
      }
      counts = []
      console.log('pushing', arr[i]);
      counts.push(arr[i]);
    }

    i++
  }

  return counts;
}

contNum(input);

//   *   Given we have a single linked list of unique integers. Write a function that finds the largest number in the list.

// e.g.
// [1, 5, 2, 6, 8, 7, 3] = 8
// [1] = 1
// [ ] = 0

let sllArray = [1, 5, 2, 6, 8, 7, 3];

const largestNum = array => {
  let current = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i+1]) {
      if (current > array[i]) {
        return current
      }
      current = array[i]
    }
  }
}

console.log('largest num in array', largestNum(sllArray));