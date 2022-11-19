"use strict";

// This recursive function will return an array holding the first n positions of a fibonacci sequence
const fibonacciSequenceRecursion = (n) => {
    // Base case to control when our recursive chain will end, it n is 1, we know we're at the start of the sequence and we can return out first two values, [0, 1].
    if (n === 1) {
        // this is the value that will be returned first, even though it is the last return statement invoked in our function chain
        return [0, 1];
    }
    // If n is not 1, we know that we have more steps to work through. this means we wil process n -1 values, then take the results of that call and take the last two values and sum them to get the value of the sequence at the given nth depth
    let step = fibonacciSequenceRecursion(--n);
    step.push(step[step.length - 1] + step[step.length - 2]);
    // returning the value of our inner recursive call to be used by prior steps. This of recursion as working in reverse, we may have started with n value 8, but we first return the value for n = 1
    return step;
}

console.log(fibonacciSequenceRecursion(9))
