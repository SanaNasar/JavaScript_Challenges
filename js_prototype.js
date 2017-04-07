// JavaScript Prototypes - used to share properties across objects

// how to create objects using constructor functions
var Car = function(color, sound) {
  this.color = color;
  this.sound = sound;
  this.honk = function() {
    alert("The car goes "+this.sound);
  };
};
// creating a new object
var honda = new Car("black", "beep");

// Part2
// Using javascript prototypes
var Car = function(color, sound) {
  this.color = color;
  this.sound = sound;
};
  // every object in javascript has a prototype
  Car.prototype.honk = function() {
    alert("The car goes "+this.sound);
  };

// every new obj will have a ref to the honk function
var honda = new Car("black", "beep");
