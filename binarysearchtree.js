class Tree {
  constructor(value) {
    this.root = null;
  }

  add(value) {
    // If we don't have a root, then we create one
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }
    let current = this.root;
    // Maintain the loop
    while (true) {
      if (current.value > value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(value);
          return;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(value);
          return;
        }
      }
    }
  }
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

contains(value) {
  // get the root
  let current = this.root;
  while(current) {
    // check if our current node has the value
    if(value === current.value) {
      return true;
    }

    current = value < current.value ? current.left : current.right;
  }
  return false;
}
