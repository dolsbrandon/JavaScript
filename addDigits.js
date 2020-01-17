/*
Solution for LeetCode Problem: Add Digits
Created by Brandon Dols

Notes from LeetCode:

Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

Example:

Input: 38
Output: 2 
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
Since 2 has only one digit, return it.
*/

// Example Number
let num = 789415641

// Track Loop Count
let numLoops = 0

// Check if solution reached
while (num.toString().length > 1) {

    // Get number of digits in the number
    let numLength = num.toString().length;
    let newNum = 0;

    // Loop through current number and add digits
    for (let count = numLength; count > 0; count--) {
        let currentNum = Math.floor((num / Math.pow(10, count - 1)) % 10);
        newNum += currentNum;
    }
    
    // Log current loop number and result
    numLoops++;
    console.log('Loop ' + numLoops + ' result: ' + newNum);
    num = newNum;
}

// Log final result
console.log('Solution is: ' + num);
