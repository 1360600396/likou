export class Solution {
  /**
   * @param nums: the given k sorted arrays
   * @return: the median of the given k sorted arrays
   */
  findMedian(nums) {
    if (nums.length === 0 || nums.every(arr => arr.length === 0)) {
      return 0.00;
    }

    let merged = [];
    for (let arr of nums) {
      merged = merged.concat(arr);
    }

    merged.sort((a, b) => a - b);
    const n = merged.length;
    
    if (n % 2 === 0) {
      return (merged[n / 2 - 1] + merged[n / 2]) / 2;
    } else {
      return merged[Math.floor(n / 2)];
    }
  }
}

// 测试样例
