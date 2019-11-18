// Linked List Data Structure

class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;
  }

  // Inserting value to the end of linked list
  insert(value) {
    // Create the nodes
    const node = { value, next: null };
    // Set the next property of the tail = to the new node
    this.tail.next = node;
    // The node is now the tail
    this.tail = node;
  }

  // Implementing deleting a node, *first is to decide whether the params will be a value or a reference to a node(good to ask interviewer)*
  removeNode(val) {
    // Starting at the head of the linked list
    let currentNode = this.head;
    // Hold reference to the previous node
    let previousNode;
    // While we have a node, passed the tail
    while (currentNode) {
      // If we find our value then break out
      if (currentNode.value === val) {
        break;
      }
      // No value found if currentNode is set to previousNode
      previousNode = currentNodel;
      // Then get the next node and assign it to the currentNode
      currentNode = currentNode.next;
    }
    // Then return undefined as we have no node with that value
    if (currentNode === null) {
      return false;
    }

    // If the node is the head then we set the head to the next value of the head node
    if (currentNode === this.head) {
      this.head = this.head.next;
      return;
    }
    // So then we remove our node by setting the node before it to the node in front of it
    previousNode.next = currentNode.next;
  }

  // Remove tail method
  removeTail() {
    let currentNode = this.head;
    let previousNode;
    while (currentNode) {
      if (!currentNode.next) {
        break;
      }
      // reference to previous node
      previousNode = currentNode;
      // move onto the next node
      currentNode = currentNode.next;
    }
    // to remove the tail, we set the previous node to null
    previousNode.next = null;
  }
}
