/*
Count and Say by Brandon Dols

LeetCode Notes:
1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term
of the count-and-say sequence. You can do so recursively, in
other words from the previous member read off the digits,
counting the number of digits in groups of the same digit.
*/
function countAndSay(num) {
    let j = 1;
    let newNum = '1';

    while(j < num) {
        let curCount = 1;
        let numArr = newNum.toString(10).split('');
        let prevNum = newNum;
        newNum = '';
        for(i = 0; i < numArr.length; i++) {
            if(prevNum[i] != prevNum[i+1]) {
                newNum += (curCount.toString()+prevNum[i]);
                curCount = 1;
            }
            else {
                curCount++;
            }
        }
        j++;
    }

    console.log(newNum);
    return newNum;
}

function realCount(num) {

}

countAndSay(6);