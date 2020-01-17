// Convert Int to String
let num = 7894
console.log('Num is: ' + num.toString());
console.log('Num length is: ' + num.toString().length);

while (num.toString().length > 1) {
    let numLength = num.toString().length;
    let newNum = 0;
    for (let count = numLength; count > 0; count--) {
        let currentNum = Math.floor((num / Math.pow(10, count - 1)) % 10);
        newNum += currentNum;
        console.log('Current Num is: ' + currentNum);
    }
    console.log('End of for loop result: ' + newNum);
    num = newNum;
}
