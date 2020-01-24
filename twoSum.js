/*
Two Sum LeetCode Solution by Brandon Dols

Notes: Brute Force solution.

LeetCode Problem Description: Given an array of integers,
return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution,
and you may not use the same element twice.
*/
let nums = [2,7,11,15,12,22,14];

var twoSum = function(nums, target) {
    for(i = 0; i < nums.length; i++) {
        for(x = 0; x < nums.length; x++) {
            if(nums[i] + nums[x] == target && i != x) {
                return [i,x];
            }
        }
    }
};

twoSum(nums,18);