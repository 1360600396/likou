// https://leetcode-cn.com/problems/intersection-of-two-arrays/solution/liang-ge-shu-zu-de-jiao-ji-by-user7746o/
/**
 * 给定两个数组，编写一个函数来计算它们的交集。

 

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
 

说明：

输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。

 * 
 */
// 直觉做法
const intersection1 = (nums1, nums2) => {
  return [ ...new Set(nums1.filter((it) => nums2.includes(it))) ]
};
// 排序 + 双指针 
const intersection2 = (nums1, nums2) => {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  const length1 = nums1.length
  const length2 = nums2.length

  let index1 = 0
  let index2 = 0

  const intersection = []

  while (index1 < length1 && index2 < length2) {
    const num1 = nums1[ index1 ]
    const num2 = nums2[ index2 ]

    if (num1 === num2) {
      if (!intersection.length || num1 !== intersection[ intersection.length - 1 ]) {
        intersection.push(num1)
      }
      index1++
      index2++
    } else if (num1 < num2) {
      index1++
    } else {
      index2++
    }
  }

  return intersection
}

// hash map
const intersection3 = (nums1, nums2) => {
  // const isNums1Min = nums1.length < nums2
  // const nums1Set = new Set(isNums1Min ? nums1 : nums2)
  // const nums2Set = new Set(isNums1Min ? nums2: nums1)

  if (nums1.length > nums2.length) {
    return intersection3(nums2, nums1)
  }

  const nums1Set = new Set(nums1)
  const nums2Set = new Set(nums2)
  const intersection = new Set()

  for (let num of nums1Set) {
    if (nums2Set.has(num)) {
      intersection.add(num)
    }
  }

  return [ ... intersection ]
}

console.log(intersection1([1,2,2,1], [2,2]))
console.log(intersection1([4,9,5], [9,4,9,8,4]))

console.log(intersection2([1,2,2,1], [2,2]))
console.log(intersection2([4,9,5], [9,4,9,8,4]))

console.log(intersection3([1,2,2,1], [2,2]))
console.log(intersection3([4,9,5], [9,4,9,8,4]))



// 验证回文字符串 https://leetcode-cn.com/problems/valid-palindrome/
/**
 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

 

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
解释："amanaplanacanalpanama" 是回文串
示例 2:

输入: "race a car"
输出: false
解释："raceacar" 不是回文串

 */

const isPalindrome = (str) => {
  str = str.replace(/[^a-zA-Z\d]/g, '').toLowerCase()
  
  const length = str.length
  let i = 0

  while (i < length / 2) {
    if (str[ i ] !== str[ str.length - 1 - i ]) {
      return false
    }
    i++
  }

  return true
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))



// https://leetcode-cn.com/problems/valid-palindrome-ii/
/**
 * 680. 验证回文字符串 Ⅱ
给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

 

示例 1:

输入: s = "aba"
输出: true
示例 2:

输入: s = "abca"
输出: true
解释: 你可以删除c字符。
示例 3:

输入: s = "abc"
输出: false
 * 
 * 
 */

const validPalindrome = (s) => {
  const isPalindrome = (st, ed) => {
    while (st < ed) {
      if (s[ st ] !== s[ ed ]) {
        return false
      }

      st++
      ed--
    }

    return true
  }

  let i = 0 // 头指针
  let j = s.length - 1 // 尾指针

  while (i < j && s[ i ] === s[ j ]) {
    i++
    j--
  }

  if (isPalindrome(i + 1, j)) {
    return true
  }

  if (isPalindrome(i, j - 1)) {
    return true
  }


  return false
}

console.log(validPalindrome('aba'))
console.log(validPalindrome('abca'))
console.log(validPalindrome('abc'))
console.log(validPalindrome("deeee"))