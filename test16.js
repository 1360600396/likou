// https://leetcode-cn.com/problems/design-add-and-search-words-data-structure/
/**
 * 211. 添加与搜索单词 - 数据结构设计
 * 
 * 请你设计一个数据结构，支持 添加新单词 和 查找字符串是否与任何先前添加的字符串匹配 。

实现词典类 WordDictionary ：

WordDictionary() 初始化词典对象
void addWord(word) 将 word 添加到数据结构中，之后可以对它进行匹配
bool search(word) 如果数据结构中存在字符串与 word 匹配，则返回 true ；否则，返回  false 。word 中可能包含一些 '.' ，每个 . 都可以表示任何一个字母。
 

示例：

输入：
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
输出：
[null,null,null,null,false,true,true,true]

解释：
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/design-add-and-search-words-data-structure
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.wordMap = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  const len = word.length
  const list = this.wordMap[ len ] || []
  
  this.wordMap[ len ] = [ ...list, word ]
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const len = word.length

  if (!this.wordMap[ len ]) {
    return false
  }

  if (word.includes('.')) {
    const wordReg = new RegExp(word)
    return this.wordMap[ len ].some((it) => wordReg.test(it))
  } else {
    return this.wordMap[ len ].includes(word)
  }
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */



// 金额转千分位
const formatPrice = (number) => {
  number = '' + number

  const [ integer, decimal = '' ] = number.split('.')

  return integer.replace(/\B(?=(\d{3})+$)/g, ',') + (decimal ? '.' + decimal : '')
}

console.log(formatPrice(123456789.3343))


// 删除有序数组重复项
var removeDuplicates = function(nums) {
  const n = nums.length;
  if (n === 0) {
      return 0;
  }
  let fast = 1, slow = 1;
  while (fast < n) {
      if (nums[fast] !== nums[fast - 1]) {
          nums[slow] = nums[fast];
          ++slow;
      }
      ++fast;
  }
  return slow;
};



/**两个数组的交集 II  力扣350题
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let l = 0, r = 0, ans = [];
  while (l < nums1.length && r < nums2.length) {
      if (nums1[l] === nums2[r]) {
          ans.push(nums1[l]);
          l++;
          r++;
      } else nums1[l] < nums2[r] ? l++ : r++;
  }
  return ans;
};



// 只出现一次的数字
// https://leetcode-cn.com/problems/single-number/

/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/single-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 除了某个元素只出现一次以外，其余每个元素均出现两次 这句话是突破口


const singleNumber = (nums) => {
  let ans = 0

  for (const num of nums) {
    ans = ans ^ num
  }

  return ans
}

// console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))



/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber1 = function(nums) {
  let map = new Map();
  for(let i = 0; i < nums.length ; ++i ){
      const count = map.get(nums[i]) || 0
      map.set(nums[i],count+1);
  }
  for( let v of map ){
      if(v[1] == 1){
          return v[0]
      }
  }
};



// 存在重复元素
/**
 * 
 * 给定一个整数数组，判断是否存在重复元素。

如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

 

示例 1:

输入: [1,2,3,1]
输出: true
示例 2:

输入: [1,2,3,4]
输出: false
示例 3:

输入: [1,1,1,3,3,4,3,2,4,2]
输出: true

作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x248f5/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

const containsDuplicate1 = (nums) => {
  const cacheMap = {}

  for (const num of nums) {
    if (cacheMap[ num ]) {
      delete cacheMap[ num ]
    } else {
      cacheMap[ num ] = 1
    }
  }

  return Object.keys(cacheMap).length < nums.length
}

const containsDuplicate2 = (nums) => {
  nums.sort((a, b) => a - b)

  const len = nums.length
  let slow = 0
  let fast = 1

  while (fast < len) {
    if (nums[ slow ] !== nums[ fast ]) {
      slow++
      fast++
    } else {
      break
    }
  }

  return fast !== len
}

console.log(containsDuplicate1([1,1,1,3,3,4,3,2,4,2]))
console.log(containsDuplicate2([1,1,1,3,3,4,3,2,4,2]))
console.log(containsDuplicate1([1,2,3,4]))
console.log(containsDuplicate2([1,2,3,4]))




// 283. 移动零 https://leetcode-cn.com/problems/move-zeroes/
/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/move-zeroes
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 */

// 思路就是将非零的不断往前移动，零的不断往后移动
const moveZeroes = (nums) => {
  let len = nums.length  
  let j = 0
  
  for (let i = 0; i < len; i++) {
    if (nums[ i ] !== 0) {
      let temp = nums[ i ]

      nums[ i ] = nums[ j ]
      nums[ j ] = temp

      j++
    }
  }

  return nums
}

moveZeroes([0,1,0,3,12])


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes1 = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {//遇到非0元素，让nums[j] = nums[i]，然后j++
          nums[j] = nums[i];
          j++;
      }
  }
  for (let i = j; i < nums.length; i++) {//剩下的元素全是0
      nums[i] = 0;
  }
  return nums;
};


// 反转字符串 https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnhbqj/
/**
 * 
 */
// 双指针
const reverseString = (s) => {
  let i = 0
  let j = s.length - 1

  while (i < j) {
    let temp = s[ i ]
    
    s[ i ] = s[ j ]
    console.log(i, j, temp, s[ j ], s[ i ])
    s[ j ] = temp
    
    i++
    j--
  }

  return s
}
// 单指针，做对称交换
const reverseString2 = (s) => {
  const len = s.length
  const halfLen = len / 2
  let i = 0

  while (i < halfLen) {
    const temp = s[ i ]
    const tail = len - 1 - i 

    s[ i ] = s[ tail ]
    s[ tail ] = temp

    i++
  }

  return s
}
// 结构交换两个值
const reverseString3 = (s) => {
  const len = s.length

  for (let left = 0, right = len - 1; left < right; left++, right--) {
    [ s[ right ], s[ left ] ] = [ s[ left ], s[ right ] ]
  }  

  return s
}

console.log(reverseString(["h","e","l","l","o"]))
console.log(reverseString2(["h","e","l","l","o"]))
console.log(reverseString3(["h","e","l","l","o"]))


// 示例：

// s = "leetcode"
// 返回 0

// s = "loveleetcode"
// 返回 2
 

// 提示：你可以假定该字符串只包含小写字母。
//  */
// 利用hash表存储数量进行计数，然后再进行一次计算
const firstUniqChar = (s) => {
  let cacheMap = {}

  for (let i = 0, len = s.length; i < len; i++) {
    const value = s[ i ]
    
    cacheMap[ value ] = typeof cacheMap[ value ] !== 'undefined' ? cacheMap[ value ] +1 : 1
  }

  for (let i = 0, len = s.length; i < len; i++) {
    if (cacheMap[ s[ i ] ] === 1) {
      return i
    }
  }

  return -1
}

console.log(firstUniqChar("aadadaad"))


var firstUniqChar1 = function(s) {
  const frequency = _.countBy(s);
  for (const [i, ch] of Array.from(s).entries()) {
      if (frequency[ch] === 1) {
          return i;
      }
  }
  return -1;
};


// 字符串转换整数 (atoi)
// 8. 字符串转换整数 (atoi) https://leetcode-cn.com/problems/string-to-integer-atoi/

/**
 * 8. 字符串转换整数 (atoi)
请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。

函数 myAtoi(string s) 的算法如下：

读入字符串并丢弃无用的前导空格
检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。
读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。
将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。
如果整数数超过 32 位有符号整数范围 [−231,  231 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −231 的整数应该被固定为 −231 ，大于 231 − 1 的整数应该被固定为 231 − 1 。
返回整数作为最终结果。
注意：

本题中的空白字符只包括空格字符 ' ' 。
除前导空格或数字后的其余字符串外，请勿忽略 任何其他字符。
 */
// 正则表达式做法
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const number = parseInt(str, 10);

  if(isNaN(number)) {
      return 0;
  } else if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
      return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
  } else {
      return number;
  }
};
const myAtoi = (s) => {
  // 读取我们想要的数据
  const matchRe = /\s*([+\-]?\d*).*?/
  const match = s.match(matchRe)
  const max = Math.pow(2, 31) - 1
  const min = -max - 1
  let result = 0
  const macthNum = match[1]

  if (match && !(macthNum == '+' || macthNum === '-')) {

    if (macthNum >= min && macthNum <= max) {
      result = macthNum
    } else if (macthNum < min) {
      result = min
    } else {
      result = max
    }
  }

  console.log(match)

  return result
}


// setInterval 模拟
const simulateSetInterval = (func, timeout) => {
  let timer = null
  const interval = () => {
    timer = setTimeout(() => {
      func()
      interval()
    }, timeout)
  }

  interval()

  return () => clearTimeout(timer)
}

const cancel = simulateSetInterval(() => {
  console.log(1)
}, 300)

setTimeout(() => {
  cancel()
}, 1000)



// 比较版本号

const compareVersion1 = function(version1, version2) {
  version1 = version1.split('.')
  version2 = version2.split('.')

  const len1 = version1.length
  const len2 = version2.length
  let maxLen = len1
  const fillZero = (array, len) => {
    while (len--) {
      array.push(0)
    }
  }

  if (len1 < len2) {
    fillZero(version1, len2 - len1)
    maxLen = len2
  } else if (len1 > len2) {
    fillZero(version2, len1 - len2)
    maxLen = len1
  }

  for (let i = 0; i < maxLen; i++) {
    const a = parseInt(version1[i])
    const b = parseInt(version2[i])
    if ( a === b) {
      // i++
    } else if (a > b) {
      return 1
    } else {
      return -1
    }
  }

  return 0
}

// 也可以不补零
const compareVersion = function(version1, version2) {
  version1 = version1.split('.')
  version2 = version2.split('.')

  const maxLen = Math.max(version1.length, version2.length)

  for (let i = 0; i < maxLen; i++) {
    const a = parseInt(version1[i]??0)
    const b = parseInt(version2[i]??0)
    if ( a === b) {
      // i++
    } else if (a > b) {
      return 1
    } else {
      return -1
    }
  }

  return 0
}

console.log(compareVersion('1.0', '1.0.0'))

// 扩展1比较多个版本号

const compareMoreVersion = (versions) => {
  return versions.sort((a, b) => compareVersion(a, b))
}

console.log(compareMoreVersion(['1.0', '3.1', '1.01']))