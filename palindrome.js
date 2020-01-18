/*
Palindrome Tester by Brandon Dols

Notes: Tests input word for palindrome then outputs
results and offers to test another word
*/
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
  })

  // Tests input word for palindrome
  function testPalindrome() {
    readline.question(`Enter word to test: `, (word) => {
      let letters = [];
      let rword = '';
      
      // Create array of letters from word
      for (let i = 0; i < word.length; i ++) {
        letters.push(word[i]);
      }

      // Add letters from array to rword to reverse word
      for (let i = 0; i < word.length; i++) {
        rword += letters.pop();
      }

      // Test for palindrome
      if (rword === word) {
        console.log(word + ' is a palindrome\n');
      } else {
        console.log(word + ' is not a palindrome\n')
      }
      restart();
      })
      
  }

  // Allows USER to test more words
  function restart() {
    readline.question(`Would you like to test another word?(y/n): `, (answer) => {
      if (answer.toLowerCase() == 'y') {
        testPalindrome();
      } else {
        readline.close();
      }
    })
  }

  // Start
  testPalindrome();