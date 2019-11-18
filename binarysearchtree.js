class Tree {
  constructor(value) {
    this.root = null;
  }

  add(value) {}
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
