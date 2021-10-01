/* Example of a Simple Queue in Javascript
*
*  A Queue is a data structure which you can remove only the first added element.
*  Imagine queueing in line for an order, the first person in line will get to order first.
*  In a sequential order, 1,2,3,4,5,6,7. 1 orders first.. 2 is the second in line.. etc..
*  This is known as First In, First Out (FIFO)
*
*/

class Queue {
  constructor(array) {
    this.array = [];
    if (array) this.array = array;
  }

  getBuffer () {
    return this.array.slice();
  }

  // helper function to check for empty
  isEmpty() {
    return this.array.length == 0;
  }

  // find the first in queue.
  peek () {
    return this.array[0];
  }

  // insert to queue
  enqueue (value) {
    return this.array.push(value);
  }

  // remove from queue
  dequeue () {
    return this.array.shift();
  }

  accessNthTopNode (queue, n) {
    let bufferArray = queue.getBuffer();

    if (n <= 0) throw 'error'
    let bufferQueue = new Queue(bufferArray);
    while (--n !== 0) {
      bufferQueue.dequeue();
    }
    return bufferQueue.dequeue();
  }

  queueSearch (queue, value) {
    let bufferArray = queue.getBuffer();
    let bufferQueue = new Queue(bufferArray);

    while(!bufferQueue.isEmpty()) {
      if (bufferQueue.dequeue() === value) {
        return true;
      }
    }
    return false;
  }
}

let queue1 = new Queue();

queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);

console.log('queue1', queue1);
console.log('first in queue', queue1.peek());
queue1.dequeue();
console.log('queue1 dequeue', queue1);

queue1.dequeue();
console.log('queue1 dequeue', queue1);

queue1.dequeue();
console.log('queue1 dequeue', queue1);

let queue2 = new Queue();
queue2.enqueue(1);
queue2.enqueue(2);
queue2.enqueue(3);
console.log('queue2', queue2);
console.log(queue2.accessNthTopNode(queue2, 1)) // 1

console.log(queue2.queueSearch(queue2, 4)) // false