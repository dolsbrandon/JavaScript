/*
Valid Parentheses Solution by Brandon Dols

LeetCode Notes: Given a string containing just the characters
'(', ')', '{', '}', '[' and ']',determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
*/

// main function
function parTest(parStr) {

    // declare variables
    let arrStr = parStr.split('');
    let leftPar = ['(','{','['];
    let rghtPar = [')','}',']'];

    let stack = [];

    // iterates through each character in the string
    // pushes or pops from stack based on the validity
    for(i = 0; i < arrStr.length; i++) {
        if(leftPar.includes(arrStr[i])) {
            stack.push(arrStr[i])
            console.log(stack);
            }
        // if right parentheses ensure that it is a matching pair
        else if(rghtPar.includes(arrStr[i]) && ((rghtPar.indexOf(arrStr[i])
        == leftPar.indexOf(stack[stack.length-1])))) {
            stack.pop();
            console.log(stack);
        }
        // error encountered so return false
        else {
            console.log(false);
            return false;
        }
    }

    // check that the stack is empty
    if(stack.length == 0) {
        console.log(true);
        return true;
    }
    else {
        console.log(false);
        return false;
    }
}

//call main function
let parStr = '()[]{}(({}))[{}]'
parTest(parStr);
