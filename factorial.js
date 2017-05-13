// factorial recursion
// eg, factorial(6): 6 × 5 × 4 × 3 × 2 × 1 = 720
var factorial = function(number) {
  if (number <= 0) { // terminal case
    return 1;
  } else { // block to execute
    return (number * factorial(number - 1));
  }
};
console.log(factorial(6));
// 720
