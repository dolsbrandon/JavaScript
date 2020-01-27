var removeDuplicates = function(nums) {
    let length = nums.length;
    let origArr = [...nums];
    for(i = 0; i < length; i++){
        if(nums[i] == nums[i+1]) {
            nums.splice(i,1);
            length -=1;
            i-=1;
        }
    }
    console.log(`\n[Duplicates Successfully Removed]`);
    console.log(`New Array Length: ${length}`)
    console.log(`New Array: [${nums}]`)
    
    console.log(`Old Array: [${origArr}]`)
};
arr = [0,0,1,1,1,2,2,3,3,4];
removeDuplicates(arr);