// Note: A popular interview question for beginners
// every number in the sequence is the sum of the two prceeding ones. 

// created an array and started an iteration
function fibonacci(n){
  var fibo = [0, 1];
  
  if (n <= 2) return 1; // return 1 for n<=2

  for (var i = 2; i <=n; i++ ){
   fibo[i] = fibo[i-1]+fibo[i-2];
  }

 return fibo[n];
}

//recursive solution

function fibonacci(n){
  if(n<=1)
    return n;
  else
    return fibonacci(n-1) + fibonacci (n-2);
}
