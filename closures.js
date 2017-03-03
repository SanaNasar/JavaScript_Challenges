// Lexical scoping

// function init() {
//   var name = 'Sana'; // name is a local variable created by init
//   function displayName() { // displayName() is the inner function, a closure
//     alert(name); // use variable declared in the parent function    
//   }
//   displayName();
// }
// init();

// Demonstrating closure concept
// Closure
// functions within another function with a return statment is called closure
function makeFunc() {
  var name = 'Sana';
  function displayName() {
    alert(name);
  }
  return displayName;
}
// function calling
var myFunc = makeFunc();
myFunc();