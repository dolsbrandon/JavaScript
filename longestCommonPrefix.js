/*
Longest Common Prefix by Brandon Dols

LeetCode Notes: Write a function to find the longest common
prefix string amongst an array of strings.

If there is no common prefix, return an empty string ""
*/

// test string array
let strArr = ['hello','help','helen'];

// main function
function findComPreLen(strArr) {

    // array of common chars
    let comChar = [];

    // find shortest string in array
    let maxLen = 1000;
    for (i = 0; i < strArr.length; i++) {
        if (strArr[i].length < maxLen) {
            maxLen = strArr[i].length;
        }
    }

    // loop through each letter to find commonality
    main:
    for (i = 0; i < maxLen; i++) {
        for (x = 0; x < strArr.length; x++) {
            if(comChar[i] == null) {
                comChar[i] = strArr[x][i];
            }
            else if (comChar[i] != strArr[x][i]) {
                comChar.pop();
                break main;
            }
        }
    }

    // output results
    console.log(`Given array has the prefix: "${comChar.join('')}" in common`);
}

// call main function
findComPreLen(strArr);