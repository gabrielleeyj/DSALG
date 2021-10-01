/* In this exercise, I create a parenthesis checker
*  A Valid Parenthesis = ((())), where there is an ( and a ) parenthesis
*  An Invalid Parenthesis = (())) where there is a missing ( parenthesis.
*  */

class Stack {
  constructor(array) {
    this.array = [];
    if (array) this.array = array;
  }

  isEmpty () {
    return this.array.length === 0;
  }
  insert (value) {
    return this.array.push(value);
  }

  delete () {
    return this.array.pop();
  }
}

const parenthesisStack = string => {
  let stack = new Stack();

  for (let i = 0; i < string.length; i++) {
    let currChar = string.charAt(i);

    if (currChar == "(") {
      stack.insert(currChar);
    } else if (currChar == ")") {

      if (stack.isEmpty()) return false;

      stack.delete();
    }
  }
  return stack.isEmpty();
}

// parenthesisStack("((()"); // false
// parenthesisStack("(((("); // false
parenthesisStack("()()"); // true