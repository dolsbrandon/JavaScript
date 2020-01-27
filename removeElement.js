/*
Remove Element by Brandon Dols

LeetCode Notes: Given an array nums and a value val, remove
all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this
by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what
you leave beyond the new length.
*/

var removeElement = function(nums, val) {

    let length = nums.length;

    for (i = 0; i < length; i++) {
        while (nums[i] == val) {
            nums.splice(i, 1);
        }
    }
    console.log(`[Success]\nNew Array with ${val} removed:\n${nums}`);
};

removeElement([7,3,2,3,3,45,4,8,156,15,7,9,3,5,3,3,2,3],3);