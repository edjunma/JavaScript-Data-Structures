// Queue Data Structure - FIFO
class Queue {
  constructor() {
    // Have empty object and variable to store and keep track of length
    this.queue = {};
    this.length = 0;
    // This is the new variable which tracks the head of the queue
    this.head = 0;
  }

  enqueue(value) {
    // Add a key of the length + head to our empty object with the value parameter
    this.queue[this.length + this.head] = value;
    this.length++;
  }

  dequeue() {
    // Reference the first value so we can return it
    const firstVal = this.queue[this.head];
    // Now delete it from the queue
    delete this.queue[this.head];
    // Decrement our length
    this.length--;
    // Finally increment the head to the next node FIFO
    this.head++;
  }

  peek() {
    // Simply return the value of the head
    return this.queue[this.head];
  }
}
