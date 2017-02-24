// Javascript patterns
// abstraction pattern demo

var work = function() {
  console.log("working hard!");
};

var dowork = function(f){

  console.log("starting");
  // error handling
  try {
      f();
  }
  catch(ex) {
    console.log(ex);
  }
  console.log("end");
};

// function calling - note: not invoking but passing
dowork(work);