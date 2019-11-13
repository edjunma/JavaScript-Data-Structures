// Linked List Data Structure

class LinkedList {
  constructor(value) {
    this.head = {value, next: null};
    this.tail = this.head;
  }

  // Inserting value to the end of linked list
  insert(value) {
    // Create the nodes
    const node = {value, next: null};
    // Set the next property of the tail = to the new node
    this.tail.next = node;
    // The node is now the tail
    this.tail = node;
  }

  // Implementing deleting a node, *first is to decide whether the params will be a value or a reference to a node(good to ask interviewer)*
  removeNode(val) {
    // Starting at the head of the linked list
    let currentNode = this.head;

  }
}