//FizzBuzz Variations in JavaScript

function fizzBuzz(){
  var output;
  for(var i=1;i<=100;i++){
    output = '';
    if(i%3 === 0){
      output+='Fizz';
    }
    if(i%5 === 0){
      output+='Buzz';
    }
    if(output === '') {
      output+=i;
    }
    print(output);
  }
}

// for (var i=1; i <= 20; i++)
// {
//     if (i % 15 == 0)
//         console.log("FizzBuzz");
//     else if (i % 3 == 0)
//         console.log("Fizz");
//     else if (i % 5 == 0)
//         console.log("Buzz");
//     else
//         console.log(i);
// }

// Smallest Solution
// for (var i = 1; i <= 100; i++) {
//   var f = i % 3 == 0, b = i % 5 == 0;
//   console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
}