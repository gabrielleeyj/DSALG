/* Example of a Simple Sorting Algorithm in Javascript
*
*  Sort an array of unsorted integers without using any in-built methods.
*  Input = [1,8,2,37,22,89,12,3,6,0,2];
*  Expected = [0,1,2,2,3,6,8,12,22,37,89];
*/

const input = [1,8,2,37,22,89,12,3,6,0,2];

const sortArray = arr => {
  if (!Array.isArray(arr)) {
    return console.log('invalid input, expecting an array');
  }

  let num;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        num = arr[i];
        arr[i] = arr[j];
        arr[j] = num;
      }
    }
  }


  return arr
}

const ans = sortArray(input);
console.log(ans); // [ 0, 1, 2, 2, 3, 6, 8, 12, 22, 37, 89 ]