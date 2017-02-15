// let's create an alien object
var alien = {
  kind: 'alien'
};

// and a person object
var person = {
  kind: 'person'
};

// and an object called 'zoey'
var zoey = {};

// assign alien as the prototype of zoey
zoey.__proto__=alien;

// zoey is now linked to alien
// it 'inherits' the properties of alien
console.log(zoey.kind); //=> ‘alien’

// assign person as the prototype of zoey
zoey.__proto__= person;

// and now zoey is linked to person
console.log(zoey.kind); //=> ‘person’

// to check if one object is a prototype of another
console.log(alien.isPrototypeOf(zoey));
//=> true