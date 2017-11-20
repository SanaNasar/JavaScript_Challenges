// Binary Search Tree
// to create a tree, we need a node that looks like below
function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}
  // create a constructor for bst
  function BinarySearchTree() {
    this.root = null;
  }
// For every node value in the left is smaller than 
// the value of the node and value at the right is higher than the value of the root.

// find the location and insert the value
BinarySearchTree.prototype.push = function(val){
   var root = this.root;

   if(!root){
      this.root = new Node(val);
      return;
   }

   var currentNode = root;
   var newNode = new Node(val); 

   while(currentNode){
      if(val < currentNode.value){
          if(!currentNode.left){
             currentNode.left = newNode;
             break;
          }
          else{
             currentNode = currentNode.left;
        }
     }
     else{
         if(!currentNode.right){
            currentNode.right = newNode;
            break;
         }
         else{
            currentNode = currentNode.right;
         }
     }
  }

}