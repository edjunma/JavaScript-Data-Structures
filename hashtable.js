class HashTable {
  constructor(size) {
    this.size = size;
    this.storage = [];
  }

  insert(key, value) {
    const index = this.myHashingFunction(key, this.size);
    if (!this.storage[index]) {
      this.storage[index] = [];
    }
    this.storage[index].push([key, value]);
  }

  get(key) {
    const index = this.myHashingFunction(key, this.size);
    let arrayAtIndex = this.storage[index];
    if (arrayAtIndex) {
      for (let i = 0; i < arrayAtIndex.length; i++) {
        const pair = arrayAtIndex[i];
        if (pair[0] === key) {
          return pair[1];
        }
      }
    }
  }

  remove(key) {
    const index = this.myHashingFunction(key, this.size);
    let arrayAtIndex = this.storage[index];
    if (arrayAtIndex) {
      // loop over all the arrays
      for (let i = 0; i < arrayAtIndex.length; i++) {
        let pair = arrayAtIndex[i];
        // Check if key matches the params
        if (pair[0] === key) {
          delete arrayAtIndex[i];
          break;
        }
      }
    }
  }

  // Hashing function
  myHashingFunction(str, n) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i) * 3;
    }
    return sum % n;
  }
}
