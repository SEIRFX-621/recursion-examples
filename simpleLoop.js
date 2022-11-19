'use strict';

const simpleLoopTo10Recursive = (counter) => {
    // This console log shows the depth we're at in our recursion, each time a function calls itself it's consider moving to a deeper depth in the recursive chain of function calls
    console.log(`Depth: ${counter}`);
    // This conditional is our base case
    if (counter >= 10) {
        return;
    }
    // counter not being greater than or equal to 10 is our recursive case
    return simpleLoopTo10Recursive(++counter);

    /**
     * A note about ++ and -- operators.
     * If you place the ++ or -- operator after the value like so
     * 
     * return simpleLoopTo10Recursive(counter++);
     * 
     * you will find that your code will terminate with an runtime exception, as your recursive
     * loop was infinite, this is because the ++ and -- operators position after a value in javascript
     * will only increment the value after that line of code has been ran. This means that the code above
     * in this comment is invoking simpleLoopTo10Recursion with the same value each time, as counter
     * is not incremented until after we've invoked the recursive call, resulting in an infinite loop.
     */
}

simpleLoopTo10Recursive(0)
