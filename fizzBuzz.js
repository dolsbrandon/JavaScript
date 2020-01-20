/*
FizzBuzz by Brandon Dols

Notes: Simple solution for the classic
FizzBuzz Question. Handles positive and negative integers.

Objective:

For the numbers from 1 to x
if given number is divisible by 3 print Fizz.
If divisible by 5 print Buzz and if divisible by both
print FizzBuzz. Otherwise, print given number if
divisible by neither 3 or 5.
*/

// import readline module for user input in node.js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    })

// initialize fizzBuzz function
function fizzBuzz(number) {

    // test for positive integer
    if(number > 1) {

        // test for divisibility and print result
        for(i = 1; i <= number; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                console.log('FizzBuzz');
            }
            else if (i % 3 == 0) {
                console.log('Fizz');
            }
            else if (i % 5 == 0) {
                console.log('Buzz');
            }
            else {
                console.log(i);
            }
        }
    }
    // runs when input number is negative
    else {

        // test for divisibility and print result
        for(i = 1; i >= number; i--) {
            if (i % 3 == 0 && i % 5 == 0) {
                console.log('FizzBuzz');
            }
            else if (i % 3 == 0) {
                console.log('Fizz');
            }
            else if (i % 5 == 0) {
                console.log('Buzz');
            }
            else {
                console.log(i);
            }
        }
    }

}

// get number from user and run fizzBuzz function
readline.question('Enter a number: ', (fizzBuzzNumber) => {
    
    fizzBuzz(fizzBuzzNumber);
    readline.close();
})
