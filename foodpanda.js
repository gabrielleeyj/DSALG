
// merge periods
// 1:2 3:5 4:7 8:9
// 1:2 3:7 8:9

let input = ['1:2', '3:5', '4:7', '8:9', '8:10'];

const overlap = array => {

  if (!array) {
    return Error
  }

  let bufferArray = []; // [[1,2],[3,5],[4,7],[8,9]]

  for (let i = 0; i < array.length; i++) {
    let split = array[i].split(":"); // [1,2]
    bufferArray.push(split);
  }

  let periodArray = [];
  for (let i = 0; i < bufferArray.length; i++) {
    if (i !== bufferArray.length - 1) {
      let firstNum = bufferArray[i][1];
      let secondNum = bufferArray[i + 1][0];
      if (firstNum < secondNum) { // 2,3
        if (!bufferArray[i - 1]) {
          let periodString = `${bufferArray[i][0]}:${bufferArray[i][1]}`;
          periodArray.push(periodString);
        }
      } else if (firstNum > secondNum) {
        let periodString = `${bufferArray[i][0]}:${bufferArray[i + 1][1]}`;
        periodArray.push(periodString);
      } else {
        let periodString = `${bufferArray[i][0]}:${bufferArray[i][1]}`;
        periodArray.push(periodString);
      }
    }
  }
  console.log(periodArray);
  // return periodArray;
}

overlap(input);