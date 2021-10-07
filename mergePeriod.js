/* merge periods
* You are given an array of string values, you will have to check for overlap and replace the numbers
* if [3:5, 4:7] the second digit of 3:5 being 5 > the first digit of 4:7 being 4. You therefore, combine it
* to get the output 3:7.
* example input = ['1:2', '3:5', '4:7', '8:9']
* expected output = ['1:2', '3:7', '8:9']
*/

let input = ['1:2', '3:5', '4:7', '8:9']; // output = ['1:2', '3:7', '8:9']
let input2 = ['1:2', '3:5', '4:7', '8:9', '10:12', '9:13']; // output ['1:2','3:7','8:9','10:12','10:13'];

const overlap = array => {

  if (!array) {
    return Error
  }

  let bufferArray = [];

  // split the period out and insert into bufferArray
  for (let i = 0; i < array.length; i++) {
    let split = array[i].split(":");
    bufferArray.push(split);
  }

  let periodArray = [], periodString;
  // loop through the bufferArray and check index [1] and [0] of array
  for (let i = 0; i < bufferArray.length; i++) {
    if (i !== bufferArray.length - 1) {
      let firstNum = bufferArray[i][1];
      let secondNum = bufferArray[i + 1][0];
      console.log('firstNum: ', firstNum, 'secondNum: ', secondNum);

      if (firstNum < secondNum) {
            if (!bufferArray[i - 1]) {
              periodString = `${bufferArray[i][0]}:${bufferArray[i][1]}`;
              console.log('pushing periodString 1', periodString);
              periodArray.push(periodString);
            }
      } else if (firstNum > secondNum) {
        if (i !== bufferArray.length - 1) {
          periodString = `${bufferArray[i][0]}:${bufferArray[i+1][1]}`;
          console.log('pushing periodString 3', periodString);
          periodArray.push(periodString);
        }
      }
    } else {
      const firstNum = bufferArray[i-1][1];
      const secondNum = bufferArray[i][0];
      console.log('else firstNum',firstNum,'secondNum',secondNum);
      if (firstNum > secondNum) {
        periodString = `${bufferArray[i][0]}:${bufferArray[i][1]}`;
        console.log('pushing periodString 5', periodString);
        periodArray.push(periodString);
      } else if (firstNum < secondNum) {
        periodString = `${bufferArray[i-1][0]}:${bufferArray[i][1]}`;
        console.log('pushing periodString 6', periodString);
        periodArray.push(periodString);
      }
    }
  }
  return periodArray;
}

console.log('output 1', overlap(input));
console.log('output 2', overlap(input2));