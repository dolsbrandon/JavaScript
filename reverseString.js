/*
Reverse String Solution by Brandon Dols

LeetCode Notes: Write a function that reverses a string.
The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do
this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.
*/

// string test input and reverse for verification
let s = ["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"]
let r = ["a","m","a","n","a","P"," ",":","l","a","n","a","c"," ","a"," ",",","n","a","l","p"," ","a"," ",",","n","a","m"," ","A"]

function reverseString() {
    let modLen = 0;
    if(s.length % 2 === 0) {
        modLen = s.length /2;
    }
    else {
        modLen = (s.length - 1) / 2;
    }

    for(i = 0; i < modLen; i++) {
        let tempChar = s[i];
        s[i] = s[s.length-(i+1)];
        s[s.length-(i+1)] = tempChar;
    }

    console.log(s);
    console.log(r);
    if(JSON.stringify(s)==JSON.stringify(r)) {
        console.log('String Successfully Reversed');
    }
    else {
        console.log('String Reversal Failed')
    }
}
