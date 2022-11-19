# Recursion

What is recursion? 

Detailed definition: In computer science, recursion is a term referring to a method of solving problems where the problem depends on solutions to small instances of the same problem, .n practice, this always involves a function invoking itself.

Simple definition: When a function calls itself. 

Recursion is a valuable tool in that it provides a powerful method for finding simple, efficient and clean solutions to dynamic and self referencing problems. There are some problems in computer science that are best solved by recursive algorithms however, it is notable that most problems can be solved with recursion, however very few problems should be solved using recursion. We'll talk about ways to identify if your problem could be a candidate for a recursive solution. 

Recursion can be accomplished in any turing complete programming language, [Turing Completeness](https://en.wikipedia.org/wiki/Turing_completeness). Javascript, python and every other programming language you'll encounter in your career will be a turning complete language, even CSS is turing complete, and you can accomplish recursive behavior even in CSS.(See [recursive-css-fun.html](./recursive-css-fun.html), keep in mind, this is a trivial example just to illustrate that you can use recursion in even surprising places, even if it's not an ideal approach).

Warning: Recursion is a powerful tool to have in your developer toolbox, however, under most circumstances it is advised to avoid recursive solutions in your everyday work, as they can obfuscate your code base, making it more difficult for your team members and yourself to easily read your code. As a general rule of thumb, if you find yourself solving a problem using recursion, take a step back and consider if recursion is in fact the most optimal and reasonable solution for your problem.  

## Key considerations when writing recursive function

There are a few key aspects of writing a recursive function that one must thoroughly consider prior to pursuing a recursive solution. These can be broken up into three groups; the conditionals for continuing the recursion and ending the recursion, a recursive function is limited by the stack size(memory available) of your machine, what needs to change in the inner recursive functions parameter values when a recursive function calls itself.

### Base case and recursive case

When writing a recursive function, the author must consider two primary logical elements before they begin to create their function. 

1. The base case: A condition that if met, the function will stop calling itself and return the solution to the problem.
2. The recursive case: A condition that if met, the function will have to call itself again in order to progress to the next stage of the solution. 

it is important to note, that the value that will be returned first is the value returned from the base case, and all subsequent recursive function calls will build their results off the value returned in the base case. So you can think of recursive functions as working in reverse, they first return the base case, and all other function calls made prior to reaching the base case will then begin to return their results using the results of the prior executed functions. 

### Stack size

A recursive function is limited in how many times it can make a call to itself by the memory available in the runtime of environment that is running your recursive function. This means that a recursive function cannot call itself infinitely, as your runtime will always eventually run out or memory, this may mean you can make 10,000 iterations, or 100 billion iterations, or even more, however, most recursive functions rarely surpass a few dozen recursive calls to itself. Be sure that you are aware of the scale in which your problem will require calling itself before you begin solving a problem with recursion. 

The reason memory is a consideration in recursion is because every time a recursive function calls itself, it instantiates memory for the new invocation of the recursive function. This means, until the recursive function reaches its 'base case'(See base case above) the runtime is on the hook for allocating memory for each new recursive call, this memory is not released until the recursive function terminates in the base case by returning the final result of the problem to be solved. 

### Updating parameters on each level of recursion

A recursive function will be initially called with a set a parameters to be used in solving the recursive problem. The minimal required parameters for a recursive function is one parameter, which holds the value used to establish if the 'base case'(See base case above) has been met. This value should change upon each iteration of recursion or else your recursive tree will loop indefinitely until you runtime runs out of memory and your application crashes. 

Most useful applications of recursive functions will require more than 1 parameter. 

# Our examples

Some brief descriptions of each example in this recursion guide

## [simpleLoop.js](./simpleLoop.js)

This code example is the simplest form of recursion. This application of recursion is so simple that it is not advisable that you replicate this in any of your code, as you are simply achieving a basic while loop expression but consuming much more memory than necessary and making your code hard to achieve. Viable examples of using recursion are primarily used when traversing binary trees and graph structures that cannot be easily traversed by classical loops. 

This recursive example could be better achieved with the simple loop below

```javascript
let x = 0;

while (x <= 10) {
    console.log(`Count: ${x}`)
    x++;
}
```

## [fibonacci.js](./fibonacci.js)

In this example we will use a recursive solution to find the first nth values of a fibonacci sequence. 

A fibonacci sequence is a sequence that is created by finding each number in the sequence by summing the prior 2 values.

0, 1, 1, 2, 3, 5, 8, 13, 21, 34...

Lets step through this sequence to better see how each step was calculated. 

the equation for a fibonacci sequence is as follows, 

```
f(0) = 0, f(1) = 1
f(n) = f(n-1) + f(n-2)
```

```
(n = 1) [0, 1] : A fibonacci sequence requires two prior numbers, so at term 1, we technically do not have a fibonacci sequence, we simple count 0, 1 instead. 
(n = 2) 1 : we find this value by summing the prior two values, which are 0+1, so our 2rd term in the sequence is 1.
(n = 3) 2 : our prior two terms are 1 and 1, so our 4th term is 1+1 = 2
(n = 4) 3 : our prior two terms are 1 and 2, so our 5th term is 1+2 = 3
(n = 5) 5 : our prior two terms are 2 and 3, so our 6th term is 2+3 = 5
(n = 6) 8 : 3 + 5 = 8
(n = 7) 13 : 5 + 8 = 13
(n = 8) 21 : 8 + 13 = 21
(n = 9) 34 : 13 + 21 = 34
```

if you'd like to solve for a fibonacci sequence without using recursion, you can do so as follows

```javascript
let a = 1, b = 0, n=9 temp;
const output = [0, 1];
// out conditional is n - 1 < 0, because we already have the first two values known as 0 and 1, so we are technically only evaluating everything after the second term in the sequence
while (n - 1 > 0) {
    temp = a;
    a = a + b;
    b = temp;
    output.push(a)
    n--;
}
console.log(output);
```

It is helpful to note that solving for the fibonacci sequence using recursion is a sub optimal approach, as the Big O notation for solving this problem without
recursion is O(n), which is linear time, and as efficient as any other one dimensional loop. 

Big O notation is a notation used to communicate the complexity of a piece of code, it is generally ideal to pursue the smallest magnitude of Big O as possible, as a larger Big O implies more computation is required by your CPU. Big O notation doesn't consider memory usage. We will review Big O notation in later units, but for right now I only want you to understand that it is easy to accidentally destroy your application efficiency by carelessly using recursion. 

The fibonacci solution shown in './fibonacci.js' is also a O(n) big O notation, however it does consume more memory and is harder to read than a classical loop solution. 

an alternative solution for fibonacci using recursion that you may see could look like the following.

```javascript
const fibonacciInefficientRecursion = (n) => {
    if (n < 2) {
        return n;
    }
    return fibonacciInefficientRecursion(n -1) + fibonacciInefficientRecursion(n-2);
}

let n = 2;
const output = [0, 1];
while ( n <= 9) {
    output.push(fibonacciInefficientRecursion(n));
    n++;
}

console.log(output);
```

Our inefficient fibonacci solution using recursion is going to run with a Big O of O(n^2), which is quadratic, and greatly less efficient than solving this problem with a basic looping solution. The reason our recursive solution for fibonacci O(n^2) is because for each invocation of our recursive function, it will call itself two times, and each of those invocations will then call itself sub n times as it reaches a total for each fibonacci term in the sequence, so to break this down for n=9, just the first step in our sequence we'd need to calculate, we can expect the following function tree.

<details>
  <summary>Step by Step breakdown of function calls for inefficient fibonacci</summary>

  ### Tree of function calls for calculating fibonacci value at n=8
  ```
    n = 8:
                f(3)[
                    f(2) + f(1)
                    ]
            f(4)[
                f(3)[f(2) + f(1)]
                +
                f(2) + f(1)
                ]
        f(5)[
            f(4)[
                f(3)[f(2) + f(1)]
                +
                f(2) + f(1)
                ]
            +
            f(3)[
                f(2) + f(1)
                ]
            ]
    f(6)[
        f(5)[
            f(4)[
                f(3)[f(2) + f(1)]
                +
                f(2) + f(1)
                ]
                +
                f(3)[
                    f(2) + f(1)
                    ]
            ]
        +
        f(4)[
            f(3)[f(2) + f(1)]
            +
            f(2) + f(1)
            ]
            +
            f(3)[
                f(2) + f(1)
                ]
            ]
        ]
    f(7)[
        f(6)[
            f(5)[
                f(4)[
                    f(3)[f(2) + f(1)]
                    +
                    f(2) + f(1)
                    ]
                    +
                    f(3)[
                        f(2) + f(1)
                        ]
                ]
            +
            f(4)[
                f(3)[f(2) + f(1)]
                +
                f(2) + f(1)
                ]
                +
                f(3)[
                    f(2) + f(1)
                    ]
                ]
            ]
        ]
        +
        f(5)[
            f(4)[
                f(3)[f(2) + f(1)]
                +
                f(2) + f(1)
                ]
            +
            f(3)[
                f(2) + f(1)
                ]
            ]
        ]
f(8)[
    f(7)[
        f(6)[
            f(5)[
                f(4)[
                    f(3)[f(2) + f(1)]
                    +
                    f(2) + f(1)
                    ]
                    +
                    f(3)[
                        f(2) + f(1)
                        ]
                ]
            +
            f(4)[
                f(3)[f(2) + f(1)]
                +
                f(2) + f(1)
                ]
                +
                f(3)[
                    f(2) + f(1)
                    ]
                ]
            ]
        ]
        +
        f(5)[
            f(4)[
                f(3)[f(2) + f(1)]
                +
                f(2) + f(1)
                ]
            +
            f(3)[
                f(2) + f(1)
                ]
            ]
        ]
    ]
    +
    f(6)[
        f(5)[
            f(4)[
                f(3)[f(2) + f(1)]
                +
                f(2) + f(1)
                ]
                +
                f(3)[
                    f(2) + f(1)
                    ]
            ]
            +
            f(4)[
                f(3)[f(2) + f(1)]
                +
                f(2) + f(1)
                ]
                +
                f(3)[
                    f(2) + f(1)
                    ]
                ]
            ]
        ]
        +
        f(5)[
            f(4)[
                f(3)[f(2) + f(1)]
                +
                f(2) + f(1)
                ]
            +
            f(3)[
                f(2) + f(1)
                ]
            ]
        ]
    ]
```
</details>

you can see how complexity can get wildly out of hand when using recursive functions with suboptimal solutions for problems that do not fit the approach of recursive solutions.

This is a great example of how recursion can make your code look cleaner and requiring you to write less lines of code, however you are actually introducing a significantly less optimal solution.

## [binaryTreeOrdered.js](./binaryTreeOrdered.js)

our third example is an example that shows a situation where recursion is by far the most optimal solution. This example shows the importance of recursion when working with binary trees(a data structure we will cover shortly). When working with any graph structure(binary trees are a typical version of a graph data structure) it is often most ideal to use recursion when manipulating these types of data structures, as they are dynamic and their depth is unknown, as well, we have to know what the previous step in the tree was in order to work properly inside of that tree. 

Binary trees: 

Binary trees are a data structure that stores values in a manner that makes them extremely easy to find compared to other collections like arrays. You will often find binary trees in search engines and in databases. They can also be used to efficiently solve problems inside of your applications, assuming the problem is a good fit for a binary tree structure. A binary tree is a type of graph data structure, which really just means a collection of objects that hold reference to other objects and can have particular rule sets applied to them to make traversing those data sets more efficient. the most common form of a graph structure is a binary tree. These structures are created by constructing relationships between nodes inside of a graph. 

See ![binary tree diagram](./binary-tree.png)

# Exercise

In this exercise we will challenge you to solve three problems using recursion.

## [pracitce1.js](./practice1.js)

Using recursion, write a function that will simply calculate the factorial value of a number provided to it as it's initial parameter. This function should only accept non-negative integers and it should output the factorial value of the initial value.

In maths, the factorial of a number is the product of all smaller integers to that number. In mathimatical notation, a factorial is denoted with an '!' so the factorial of 7 would be written as such, '!7'.

ex: 
!7 = 7 * 6 * 5 * 4 * 3 * 2 * 1 = 5040

### Question

After you've completed you code and have verified it is working using recursion, do you believe that your solution is more efficient that if you had solved this same problem without using recursion and only using a loop?

## [pracitce2.js](./practice2.js)

Using recursion, write a function that wil accept an array as its only parameter and output the sum of all integers in that array.

so if I have an array like this 

const arr = [3,5,8,7,12]

you function should return the value 35.

### Question

After you've completed you code and have verified it is working using recursion, do you believe that your solution is more efficient that if you had solved this same problem without using recursion and only using a loop?

## [pracitce3.js](./practice3.js)

Using recursion, write a function that will return true or false if a string passed to it is a palindrome or not

a palindrome is a string that appears the same is shown backwards or forwards. 

EX: 
racecar
kayak
rotor

## [pracitce4.js](./practice4.js)

Using recursion, write a function that will travel a complex javascript object and print the name value in each node. You'll be provided with a test object like so

```javascript
const bigObject = {
    name: 'top',
    a1: {
        name: 'a1',
        b1: {
            name: 'b1'
        },
        b2: {
            name: 'b2',
            c1: {
                name: 'c1'
            }
        }
    },
    a2: {
        name: 'a2'
    },
    a3: {
        name: 'a3',
        b1: {
            name: 'b1',
            c1: {
                name: 'c1',
                d1: {
                    name: 'd1'
                },
                d2: {
                    name: 'd2'
                },
                d3: {
                    name: 'd3'
                }
            },
            c2: {
                name: 'c2'
            }
        }
    }
}
```

and your output should look something like this

```
viewing value: top
viewing value: a1
viewing value: b1
viewing value: b2
viewing value: c1
viewing value: a2
viewing value: a3
viewing value: b1
viewing value: c1
viewing value: d1
viewing value: d2
viewing value: d3
viewing value: c2
```

The goal is to use recursion to repeat the name printing task on each level of each child of your complex object. So you can see how each child of each node is itself it's own object, and all our recursive function does it print the name value for a given object and then check all children for name values.

### Question

Can you write this same solution using while loops, if so, would you prefer a recursive solution or a looping solution for a scenario like this? 

# Extra practice resources

1. [Geeksforgeeks recursion practice with solutions](https://www.geeksforgeeks.org/recursion-practice-problems-solutions/)
2. [w3resource recursion practice](https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php)





