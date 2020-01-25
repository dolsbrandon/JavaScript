/*
Palindrome Number by Brandon Dols

Notes: Tests number for palindrome
*/

// palindrome test function
var isPalindrome = function(x) {

    // return false if negative
    if(x < 0) {
        return false;
    }

    // store reverse number
    let revNum = 0;

    // number length in digits
    let numLen = Math.ceil(Math.log10(x + 1));

    // iterate through digits of number and create reverse number
    for(i = 0; i < numLen; i++) {
        revNum += (Math.floor((x / 10**i) % 10) * 10**(numLen-(i+1)));
    }
    // is palindrome
    if (revNum == x) {
        console.log(`${x} is a palindrome`);
    }
    // is not palindrome
    else {
        let str = 
        console.log(`${x} is not a palindrome`);
    }
};

isPalindrome(415676514);
