function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.wakeUp = function() {
  console.log("I'm a person and I'm awake!");
};

var p = new Person('Sana', 24);
console.log(p);
p.wakeUp();

// Queen inherits the property of person object
Queen.prototype = Object.create(Person.prototype);
Queen.prototype.rule = function() {
  console.log('Makes the world a better place');
};

function Queen(name, age, reign) {
  this.name = name;
  this.age = age;
  this.reign = reign;
}

// console.log("Queen before the new constructor is built: ", Queen);
// it is the same because the Queen contructor is hoisted


var q = new Queen('Cleopatra', 55, 'Over land and sea');

console.log("Queen after the new constructor is built: ", Queen);

console.log("should be the queen ruling them all: ",q.rule());
console.log(q.wakeUp()); // q can still inherit from the person