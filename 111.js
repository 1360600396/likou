/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let map=new Map()
  for(let i=0;i<nums.length;i++){
    map.has(nums[i])?map.set(nums[i],map.get(nums[i])+1):map.set(nums[i],1)
    
  }

  console.log("123")
  for(let item of nums){
        if(map.get(item)>nums.length/2){
          debugger
            return map.get(item)
            debugger
        }
    }
};

console.log(majorityElement([1,2,3,1,1]))