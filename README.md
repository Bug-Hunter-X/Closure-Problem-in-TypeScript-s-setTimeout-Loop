# TypeScript Closure Problem in setTimeout Loop

This repository demonstrates a common issue encountered when using `setTimeout` within a loop in TypeScript (and JavaScript).  The problem arises from how closures capture variables.

## The Bug

The `printNumbers2` function attempts to print numbers 1 through 5 with a one-second delay between each. However, due to the closure created by `setTimeout`, it prints '6' five times instead.

## The Solution

The solution involves using an immediately-invoked function expression (IIFE) or `let` within the loop to create a new scope for each iteration, capturing the value of `i` at that specific point in time. 

## How to reproduce

1. Clone this repository.
2. Compile the code using `tsc bug.ts`.
3. Run the compiled JavaScript code using `node bug.js` (observe the incorrect output).
4. Compile and run `bugSolution.ts` to see the corrected output.