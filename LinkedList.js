// Singly Linked List
// what you need: 
// * a node obj pointing to next.
// * a head which is a pointer to point the first node of the linked list.
// * add and remove methods

// Lets build a consturctor function with head and length.
function LinkedList(val) {
    this.length = 0;
    this.head = null;
}

// add and create functions
LinkedList.prototype.push = function (val) {
  // create a new node object with val
  var node = {
      val: value,
      next: null
  };
  var current;
  // special case: if there is no elem in the list yet
  // ie, check if the head is empty 
  if (this.head === null) {
    this.head = node;
  } else {
    current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  // update the counter
  this.length ++;
};









};
