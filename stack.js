/* Example of a Simple Stack in Javascript
*
*  A Stack is a data structure which only the last inserted element can be removed and accessed.
*  Imagine stacking plates on a table. The first plate is the last plate to be taken out.
*  This is known as Last In, First Out (LIFO)
*
*/

class Stack {
  constructor(array) {
    this.array = [];
    if (array) this.array = array;
  }

  isEmpty() {
    return this.array.length == 0;
  }

  // see what value is at the top - O(1)
  peek () {
    return this.array[this.array.length-1]
  }

  // insert value to top of stack - O(1)
  insert (value) {
    this.array.push(value);
  }

  // remove from top of stack - O(1)
  pop () {
    this.array.pop();
  }

  getBuffer () {
    return this.array.slice();
  }

  accessNthNodeFromTop (stack, n) {
    let bufferArray = stack.getBuffer();

    if (n <= 0) throw 'error'

    let bufferStack = new Stack(bufferArray);
    while (--n !== 0) {
      bufferStack.pop();
    }
    return bufferStack.pop();
  }

  stackSearch (stack, n) {
    let bufferArray = stack.getBuffer();

    let bufferStack = new Stack(bufferArray);
    while(!bufferStack.isEmpty()) {
      if (bufferStack.pop() === n) {
        return true;
      }
    }
    return false
  }
}

// initialize stack
let stack1 = new Stack();

stack1.insert(10);
stack1.insert(11);
stack1.insert(12);
console.log('stack', stack1);
console.log('peek stack', stack1.peek());
stack1.pop(12);
console.log('stack 2', stack1);
console.log('peek stack 2', stack1.peek());

let stack2 = new Stack();

stack2.insert(1)
stack2.insert(2)
stack2.insert(3)
console.log('stack', stack2);
console.log(stack2.accessNthNodeFromTop(stack2,1)) // 3
console.log(stack2.accessNthNodeFromTop(stack2,3)) // 1

console.log(stack1.stackSearch(stack1,10)) // true