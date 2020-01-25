var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }
    let revNum = 0;
    let numLen = Math.ceil(Math.log10(x + 1));
    for(i = 0; i < numLen; i++) {
        revNum += (Math.floor((x / 10**i) % 10) * 10**(numLen-(i+1)));
    }
    if (revNum == x) {
        console.log(`${x} is a palindrome`);
    }
    else {
        let str = 
        console.log(`${x} is not a palindrome`);
    }
};

isPalindrome(41567);
