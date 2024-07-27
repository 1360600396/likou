// 快速排序

const quickSort = (array) => {
  const length = array.length
  if (length <= 1) {
    return array
  }

  const midIndex = Math.floor(length / 2)
  const midValue = array.splice(midIndex, 1)[ 0 ]
  let leftArray = []
  let rightArray = []
  let index = 0

  while (index < length - 1) {
    const curValue = array[ index ]

    if (curValue <= midValue) {
      leftArray.push(curValue)
    } else {
      rightArray.push(curValue)
    }

    index++
  }

  return quickSort(leftArray).concat([ midValue ], quickSort(rightArray))
}

const arr = [ -10, 10, 1, 34, 5, 1 ]

console.log(quickSort(arr))


// 冒泡排序
// 冒泡排序 https://juejin.cn/post/6844903814340804615#heading-3
/**
 * 1. 从第一个元素开始，比较相邻的两个元素，前者大就交换位置
 * 2. 每次遍历结束，都能找到一个最大值
 * 3. 如果还有没排序的元素继续1
 * 
 */
const swap = (array, a, b) => [ array[ b ], array[ a ] ] = [ array[ a ], array[ b ] ]
const bubbleSort = (array) => {
  const length = array.length
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[ j ] > array[ j + 1 ]) {
        swap(array, j, j + 1)
      }
    }
  }

  return array
}

console.log(bubbleSort([ -1, 10, 10, 2 ]))

// 选择排序
// 选择排序 https://juejin.cn/post/6844903814340804615#heading-8
/**
 * 1. 取出未排序的第一个元素，遍历该元素之后的部分并进行比较。第一次就是取第一个元素
 * 2. 如果有更小的就交换位置
 */

const swap = (array, a, b) => [ array[ b ], array[ a ] ] = [ array[ a ], array[ b ] ]
 
const selectSort = (array) => {
  const length = array.length

  for (let i = 0; i < length; i++) {
    let minIndex = i

    for (let j = i + 1; j < length; j++) {
      if (array[ j ] < array[ minIndex ]) {
        minIndex = j
      }
    }

    if (minIndex !== i) {
      swap(array, i, minIndex)
    }
  }

  return array
}

console.log(selectSort([ -1, 10, 10, 2 ]))



// 插入排序
/**
 * 记住你是怎么打牌的就知道插入排序怎么实现了
 * 1. 首先有一个有序的序列，可以认为第一个元素就是已排序的序列
 * 2. 从未排序序列中取一个元素出来，往有序序列中找到合适的位置，如果该位置比元素大，则后移动, 否则继续往前找
 */

const insertSort = (array) => {
  for (let i = 1, length = array.length; i < length; i++) {
    let j = i - 1
    const curValue = array[ i ]

    while (j >= 0 && array[ j ] > curValue) {
      array[ j + 1 ] = array[ j ]
      j--
    }

    array[ j + 1 ] = curValue
  }

  return array
}

console.log(insertSort([ -1, 10, 10, 2 ]))