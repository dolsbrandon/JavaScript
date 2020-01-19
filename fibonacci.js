/*
Fibonacci Number Finder by Brandon Dols

Notes: Finds Fibonacci numbers and stores them in an array to speed future function calls
*/

// import readline module and create interface
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    })
    
// array for storing previously found fibonacci numbers
foundFibNums = [0,1,1]

// recursive function to find given fibonacci number
function findFibonacci(num) {

    if(foundFibNums[num - 1] == null) {
        foundFibNums.push(findFibonacci(num-2) + findFibonacci(num-1));
        return (findFibonacci(num-2) + findFibonacci(num-1));
    }
    else {
        return foundFibNums[num - 1];
    }

}

function menu() {
    // get user input
    readline.question(`Enter fibonacci number to find: `, (fibNum) => {
    
    // print fibonacci number
    console.log(findFibonacci(fibNum));
    console.log(foundFibNums);

        // find new number?
        readline.question(`Would you like to find another number? (y/n) `, (again) => {
    
            if (again.toLowerCase() == 'y') {
                menu();
            }
            else {
                readline.close();
            }
        })
    })


}

menu();
