
/* 

The classic Fibonacci Problem
______________________________

Description: The most common version of the problem asks that you return the N-th fibonacci number.

Input: A number N.

Output: The N-th number of the fibonacci sequence.

*/ 

function fibonacci(n) {
    if(n === 1) return 0;
    if(n === 2) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
  };


/*
Commentary: This is the most generic solution using recursion. The code is short and clean but it has an exponential time complexity O(2n).
It's extremely inefficient and takes a lot of time to calculate a Fibonacci number higher than 40.
*/

// *******************************************************

/*

Complete Fibonacci sequence up to N
______________________________

Description: This version of the problem asks that you return all the Fibonacci numbers up to N in an array.

Input: A number N.

Output: An array of all Fibonacci numbers up to N.

*/ 

function completeFibonacci(n) {
    if(n < 1) return [];
    let array = [0];
    let fib = 1;
    for(let i = 0; i < n-1; i++){
      array.push(fib);
      fib += array[i];
    };
    return array;
  };

/*
Commentary: This code doesnt use recursion and instead simply uses a loop to calculate the Fibonacci numbers up to N and stores them in an array.
It has a linear time complexity O(n), much more efficient than the solution using recursion.
*/

// *******************************************************


/* 

The performance version of the Fibonacci Problem
______________________________

Description: Like the classic version of the problem, you have to return the N-th fibonacci number. But this time, the
numbers are much higher and there are many tests that ensure that code with an exponential time complexity will always fail.

Input: A number N.

Output: The N-th number of the fibonacci sequence.

*/ 

function memoizedFibonacci(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n == 0 || n == 1) return n;
    memo[n] = memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo);
    return memo[n];
};

/*
Commentary: Uses the previous recursive solution with an added Memo Object that stores all the results of the calculations.
This reduces the time complexity from exponential O(2^n) to a linear O(n). This is a Dynamic Programming solution.
The key is to understand how many calculations you can avoid doing again if you store the results and consult them whenever needed.
Javascript's dictionary-like objects are ideal for this (it would be inefficient to use an array, as you would have to traverse it to check if you already stored a value).
*/

// *******************************************************


/* 

Tribonacci sequence with custom Signature
______________________________

Description: The Tribonacci sequence is made adding the last 3 numbers of the sequence to generate the next.
This problem also includes a custom initial signature of three numbers for the sequence.

Input: An array with a Signature initial sequence of three numbers and a number N.

Output: An array with the first N elements of the sequence.

*/

function tribonacci(signature,n){
    while(signature.length < n){
     let nextNum = signature.slice(-3).reduce((a,b) => a + b);
     signature.push(nextNum);
    };
    return signature.slice(0,n);
  };

/*
Commentary: A simple problem included to show how you can adapt to work with sequences that don't necessarily begin with 0 and 1.
*/



