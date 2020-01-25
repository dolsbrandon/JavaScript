/*
Roman Numeral to Integer Converter by Brandon Dols

Notes: Another LeetCode Solution. It's not pretty but it gets the job done.
*/

// Converts Roman Numeral to Int and Prints Answer to Console
let romanToInt = function(s) {

    // Store Converted Number
    let convNum = 0;

    // Converts based on numeral and position of modifier numerals
    for(i = 0; i < s.length; i++) {
        if(s[i] == 'M') {
            if(s[i-1] == 'C') {
                convNum += 800;
            } else {
                convNum += 1000;
            }
        }
        else if(s[i] == 'D') {
            if(s[i-1] == 'C') {
                convNum += 300;
            } else {
                convNum += 500;
            }
        }  
        else if(s[i] == 'C') {
            if(s[i-1] == 'X') {
                convNum += 80;
            } else {
                convNum += 100;
            }
        }   
        else if(s[i] == 'L') {
            if(s[i-1] == 'X') {
                convNum += 30;
            } else {
                convNum += 50;
            }
        } 
        else if(s[i] == 'X') {
            if(s[i-1] == 'I') {
                convNum += 8;
            } else {
                convNum += 10;
            }
        } 
        else if(s[i] == 'V') {
            if(s[i-1] == 'I') {
                convNum += 3;
            } else {
                convNum += 5;
            }
        }  
        else if(s[i] == 'I') {
                convNum += 1;
        }         
    }

    // Print to console
    console.log(convNum);
};

// Call function
romanToInt('MMMCMXCIX');