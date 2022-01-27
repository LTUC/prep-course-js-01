'use strict';
// Recursion Example1: Factorial

function fact(n){
    // let fact =1; 
    if(n== 1 || n==0){
      return 1;
    }
    else {
   return n*fact(n-1);
    }
  }
  
  // console.log(1, fact(4));
  
  // Factorial using looping:
  function factLoop(n){
     let fact =1;
     for(let i=1 ; i<=n; i++){
       fact = fact*i;
     }
  return fact;
  }
  
  // console.log(2, factLoop(4))
  
  
  // Example2 : Count Down 
  function countDown(n){
    for(let i = n ; i>0 ; i--){
      console.log(i);
    }
  }
  
  // console.log(countDown(3));
  // Count Down using Recursion:
  function countDownR(n){
    if(n == 0){
       return;
    } 
    console.log(n);
    countDownR(n-1);
  }
  // console.log(countDownR(3));
  
  // Example3 sum of n number 
  function sumNumber(n){
    if(n == 0) return n;
    else {
      return n + sumNumber(n-1);
      
    }
  }
  
  // console.log(sumNumber(3))
  
  // Example4: Fibonacci:
  function fib(n){
    if(n== 1 || n === 0){ // n<2
      return n
    }
    else {
      return fib(n-1) + fib(n-2);
    }
  }
  
  let fibArrow = n => (n== 1 || n === 0)? n :fib(n-1) + fib(n-2); 
  
  console.log(fibArrow(17))