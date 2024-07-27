// 奇数链表后面连接偶数链表
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var oddEvenList = function (head) {
  if (head === null) {
    return null
  }
  if (head.next === null) {
    return head
  }
  let odd = head, even = head.next, evenHead = head.next;
  console.log(evenHead)
  while (even !== null && even.next !== null) {
    odd.next = odd.next.next;
    odd = odd.next;
    even.next = even.next.next;
    even = even.next;
  }
  odd.next = evenHead;
  console.log(evenHead, head.next)
  return head;
};

let node5 = new ListNode(5)
let node4 = new ListNode(4, node5)
let node3 = new ListNode(3, node4)
let node2 = new ListNode(2, node3)
let node1 = new ListNode(1, node2)

console.log(oddEvenList(node1))



// 手写promise
class MyPromise {
  constructor (exe) {
    this.value = undefined
    this.status = 'pending'
    this.successQueue = []
    this.failureQueue = []
    const resolve = () => {
      const doResolve = (value) => {
        if (this.status === 'pending') {
          this.status = 'success'
          this.value = value
  
          while (this.successQueue.length) {
            const cb = this.successQueue.shift()
  
            cb && cb(this.value)
          }
        }
      }

      setTimeout(doResolve, 0)
    }

    const reject = () => {
      const doReject = (value) => {
        if (this.status === 'pending') {
          this.status = 'failure'
          this.value = value
  
          while (this.failureQueue.length) {
            const cb = this.failureQueue.shift()
  
            cb && cb(this.value)
          }
        }
      }

      setTimeout(doReject, 0)
    }

    exe(resolve, reject)
  }

  then (success = (value) => value, failure = (value) => value) {
    return new MyPromise((resolve, reject) => {
      const successFn = (value) => {
        try {
          const result = success(value)
          
          result instanceof MyPromise ? result.then(resolve, reject) : resolve(result)
        } catch (err) {
          reject(err)
        }
      }

      const failureFn = (value) => {
        try {
          const result = failure(value)
          
          result instanceof MyPromise ? result.then(resolve, reject) : resolve(result)
        } catch (err) {
          reject(err)
        }
      }

      if (this.status === 'pending') {
        this.successQueue.push(successFn)
        this.failureQueue.push(failureFn)
      } else if (this.status === 'success') {
        success(this.value)
      } else {
        failure(this.value)
      }
    })
  }

  catch () {

  }
} 

const pro = new MyPromise((resolve, reject) => {
  setTimeout(resolve, 1000)
  setTimeout(reject, 2000)
})

pro
  .then(() => {
    console.log('2_1')
    const newPro = new MyPromise((resolve, reject) => {
      console.log('2_2')
      setTimeout(reject, 2000)
    })
    console.log('2_3')
    return newPro
  })
  .then(
    () => {
      console.log('2_4')
    },
    () => {
      console.log('2_5')
    }
  )
  
pro
  .then(
    data => {
      console.log('3_1')
      throw new Error()
    },
    data => {
      console.log('3_2')
    }
  )
  .then(
    () => {
      console.log('3_3')
    },
    e => {
      console.log('3_4')
    }
  )


  Promise.myRace = (promises) => {
    return new Promise((rs, rj) => {
      promises.forEach((p) => {
        Promise.resolve(p).then(rs).catch(rj)
      })
    })
  }
  

  // 手写promise.race
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 1);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 2);
  });
  
  Promise.myRace([promise1, promise2]).then((value) => {
    console.log(value) // 2
  });
  
  Promise.myRace([promise1, promise2, 3]).then((value) => {
    console.log(value) // 3
  });



  // 两数之和
  /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for(let i=0;i<nums.length;i++)
    for(let j=i+1;j<nums.length;j++){
     if(nums[i]+nums[j]==target){
         return [i,j]
     }
    }
    return [-1,-1]
 };


 // https://leetcode-cn.com/problems/merge-sorted-array/
/**
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。

 

示例 1：

输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
示例 2：

输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]

 * 
 */
const nums1 = [1,2,3,0,0,0]
const m = 3
const nums2 = [2,5,6]
const n = 3

const merge = (num1, m, num2, n) => {
  let i = m - 1
  let j = n - 1
  let k = m + n  -1

  while (i >= 0 && j >= 0) {
    if (num1[ i ] > num2[ j ]) {
      num1[ k ] = num1[ i ]
      i--
      k--
    } else {
      num1[ k ] = num2[ j ]
      j--
      k--
    }
  }

  while (j >= 0) {
    num1[ j ] = num2[ j ]
    j--
  }

  return num1
}

console.log(merge(nums1, m, nums2, n))