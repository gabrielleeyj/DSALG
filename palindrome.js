const palindrome = string => {
  let str = string.toLowerCase();
  let reString = string.reverse().split('');

  if (str === reString) {
    console.log('true - ', str);
    return true
  } else {
    console.log('false - ', str);
    return false
  }
}

palindrome('abba');
