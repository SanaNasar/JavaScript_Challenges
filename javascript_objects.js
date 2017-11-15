// example of a simple object
var myFirstObject = {firstName: "Richard", favoriteAuthor: "Conrad"};

var ageGroup = {30: "Children", 100:"Very Old"};
console.log(ageGroup.30);
// This will throw an error​
​// This is how you will access the value of the property 30, to get value "Children"​
console.log(ageGroup["30"]); // Children​

​//It is best to avoid using numbers as property names.

// Reference and Primitive datatypes.
// The primitive data type String is stored as a value​
​var person = "Kobe";  
​var anotherPerson = person; // anotherPerson = the value of person​
person = "Bryant"; // value of person changed​
​
console.log(anotherPerson); // Kobe​
console.log(person); // Bryant