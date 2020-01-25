/*
Reverse Number Solution by Brandon Dols

LeetCode Notes: Given a 32-bit signed integer, reverse digits of an integer.

Assume we are dealing with an environment which could only store
integers within the 32-bit signed integer range: [−231,  231 − 1].

For the purpose of this problem, assume that your function returns
0 when the reversed integer overflows.
*/

// Integer Reversal Function
let reverse = function(x) {

    // Handle negative int
    let negative = false;
    if (x < 0) {
        negative = true;
    }

    // Turn num into string array
    strNum = x.toString().split('');
    revNum = '';

    // Reverse array into string
    for (var i = 0, len = strNum.length; i < len; i += 1) {
        let tempNum = strNum[i];
        tempNum += revNum;
        revNum = tempNum;
    }

    // String to int and handle negative
    revNum = parseInt(revNum);
    if(negative == true) {
        revNum *= -1;
    }

    // Handle overflow
    if(revNum > 2147483648 || revNum < -2147483648) {
        return 0;
    }

    console.log(revNum);
};

reverse(-1724568);

