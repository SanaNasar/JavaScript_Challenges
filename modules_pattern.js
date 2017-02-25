// Javascript Patterns
// Module pattern - revealing module pattern
// means collection of components to do some work

// how to create a worker object that points to two functions
// var worker = createWorker();
// worker.job1();
// worker.job2();

//creating a module in javascript to expose to the outside to perform something
// we don't want to pollute the global space by creating a global variable
// So, we create an IIFE (Immediately Invoked Funciton)

(function() {
var createWorker = function(){
// task1 & task2 are local variables which is visible only inside the function
  var task1 = function(){
    console.log("task1");
  };

  var task2 = function(){
    console.log("task2");
  };

// returning an object to the outside
  return {
    job1: task1,
    job2: task2
  };

};
var worker = createWorker();

worker.job1();
worker.job2();
worker.job2();
}());