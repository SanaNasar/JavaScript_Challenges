//////////////////////////////////////////////
//          Lesson 1 - JS Objects           //
//////////////////////////////////////////////

/*
// Create a JS Object
var object = {
  name: 'Adam',
  address: {
    state: 'Florida'
  }
};

// Access Object Data
var myname = object.name;
console.log(myname);
// Change Object Data
object.address.state = 'Oklahoma';
// Log the Document Object
// console.log(document) in dev tools
*/

//////////////////////////////////////////////
//         Lesson 2 - DOM Functions         //
//////////////////////////////////////////////

/*
// Create a paragraph tag 
var paragraph = document.createElement('P');
// Add text to paragraph
paragraph.textContent = 'The DOM is the bomb!';
// Add text to body
document.body.appendChild(paragraph);
*/

//////////////////////////////////////////////
//        Lesson 3 - Event Listeners        //
//////////////////////////////////////////////

/*
// Create DIV Element
var div = document.createElement('DIV');
// Add height to Element
div.style.height = '100vh';
// Append Element to DOM
document.body.appendChild(div); 
// Add Event Listener
div.addEventListener('mousemove', function(event) {
  console.log(event);
  var x = event.clientX;
  var y = event.clientY;
  div.textContent = x + ', ' + y;
  div.style.backgroundColor = 'rgb(' + x + ', ' + y + ', 100)';
});
*/

//////////////////////////////////////////////
//           Lesson 4 - Refactor Functional Programming     //
//////////////////////////////////////////////

function fullScreen(element) {
  var newElement = document.createElement(element);
  newElement.style.height = '100vh';
  document.body.appendChild(newElement);
  return newElement;
}

function input(inputEvent, DOMElement, callback) {
  DOMElement.addEventListener(inputEvent, function(event) {
    var x = event.clientX;
    var y = event.clientY;
    callback(DOMElement, x, y);
  });
}

function output(element, x, y) {
  element.textContent = x + ', ' + y;
  element.style.backgroundColor = 'rgb(' + x + ', ' + y + ', 100)';
}

//instatiate the function
input('mousemove', fullScreen('DIV'), output);
// Change 'mousemove' to 'click'
// Change 'DIV' to 'MAIN'