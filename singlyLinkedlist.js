// implemnting singly linked list using javascript

function Node(element) {
  this.element = element;
  this.next = null;
}

function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display;
}

function find(item) {
var currNode = this.head;
while (currNode.element != item) {
      currNode = currNode.next;
   }
return currNode;
}

function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}

function display() {
var currNode = this.head;
while (currNode.next !== null) {
      console.log(currNode.next.element);
      currNode = currNode.next;
   }
}


var cities = new LList();
cities.insert("Seattle", "head");
cities.insert("Portland", "Seattle");
cities.insert("Boulder", "Portland");
cities.display();