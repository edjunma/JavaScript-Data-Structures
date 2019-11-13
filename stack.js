// Stack Data Structure- LIFO
class Stack {
  constructor() {
    // This creates our stack, which starts as an empty object
    this._storage = {};
    this._length = 0;
  }

  // This method will then push a value onto the top of the stack
  push(value) {
    // Adding the value to the top of the stack
    this._storage[this._length] = value;
    // Since we added the value we should also increment by 1
    this._length++;
  }

  // This method is responsible for popping off the last value and returning it

  pop() {
    // We first have to get the last value that we have to return
    const lastVal = this._storage[--this._length];
    // Now remove the item which is the length - 1
    delete this._storage[--this._length];
    // Then decrement the length of the stack
    this._length--;
    // Finally return the last value
    return lastVal;
  }

  // This method will peek at the last value added to the stack
  peek() {
    const lastVal = this._storage[--this._length];
    return lastVal;
  }
}
