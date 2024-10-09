// 第71道题
function createSingleCallFunction(fn) {
  let called = false;

  return function(...args) {
      if (called) {
          return undefined;
      }
      called = true;
      return fn(...args);
  };
}



function create(fn){
  let bool=null
  return function(args){
    if(bool)return underfined
    bool=true
    fn(args)
  }
}

create(fn)

// 示例用法
const myFunction = createSingleCallFunction((x) => x * 2);

console.log(myFunction(5)); // 输出 10
console.log(myFunction(10)); // 输出 undefined



// 第70题

Array.prototype.map2 = function (callback) {
  const result = [];
  
  this.forEach((cur, index, array) => {
    result.push(callback(cur, index, array));
  })
  
  return result;
};

// 示例用法
let arr = [1, 2];
let arr2 = arr.map2(function (it, i, array) {
  console.log(it, i, array);
  return it * 2;
});

console.log(arr2); // 输出 [2, 4]




// 第69题
const storage = {
  prefix: 'fatFish',

  setItem(key, value, time) {
    key = `${this.prefix}${key}`;
    const expiryTime = time ? new Date(time).getTime() : Date.now() + 30 * 24 * 60 * 60 * 1000;
    window.localStorage.setItem(key, JSON.stringify({ value, expiryTime }));
  },

  getItem(key) {
    key = `${this.prefix}${key}`;
    const item = JSON.parse(window.localStorage.getItem(key));

    if (item && item.expiryTime > Date.now()) {
      return item.value;
    }

    window.localStorage.removeItem(key);
    return null;
  }
};

// 示例用法
storage.setItem('test', 'Hello, World!');
console.log(storage.getItem('test')); // 输出 "Hello, World!"




// 第
function findCommonParent(oNode1, oNode2) {
  const ancestors = new Set();

  // 收集第一个节点的所有祖先
  while (oNode1) {
    ancestors.add(oNode1);
    oNode1 = oNode1.parentNode;
  }

  // 查找第二个节点的第一个祖先
  while (oNode2) {
    if (ancestors.has(oNode2)) {
      return oNode2;
    }
    oNode2 = oNode2.parentNode;
  }

  return null; // 如果没有共同父节点
}

// 示例用法
// const commonParent = findCommonParent(node1, node2);


// 第72题
// 方式2：利用Object.defineProperty劫持的方式
; (() => {
  let _a = 1
  Object.defineProperty(window, 'a', {
    get() {
      return _a++
    }
  })

  console.log(a == 1 && a == 2 && a == 3)
})()

// 方式3：利用Proxy劫持的方式
; (() => {
  let a = new Proxy({ i: 1 }, {
    get(target) {
      return () => target.i++
    }
  })

  console.log(a == 1 && a == 2 && a == 3)
})()


// 第61道
const sleep = (func, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(func())
    }, delay)
  })
}

const consoleStr = (str) => {
  return () => {
    console.log(str)
    return str
  }
}

const doFns = async () => {
  const name = await sleep(consoleStr('前端胖头鱼'), 1000)
  const sex = await sleep(consoleStr('boy'), 1000)
  const age = await sleep(consoleStr(100), 1000)

  console.log(name, sex, age)
}


// 第58题
// 类数组转化为数组
const arrayLikeObj = {
  0: '前端胖头鱼',
  1: 100,
  length: 2
}

// 1. [].slice
console.log([].slice.call(arrayLikeObj))
// 2. Array.from
console.log(Array.from(arrayLikeObj))
// 3. Array.apply




const render = (template, data) => {
  let result = template;
  for (const key in data) {
    result = result.split(`{{ ${key} }}`).join(data[key]);
  }
  return result;
};

const data = {
  name: '前端胖头鱼',
  age: 100
};
const template = `
  我是: {{ name }}
  年龄是: {{ age }}
`;
console.log(render(template, data));




// 第51题
const isCyclic = (obj) => {
  const seen = new WeakSet();

  const detect = (current) => {
    if (current && typeof current === 'object') {
      if (seen.has(current)) return true;
      seen.add(current);
      return Object.keys(current).some(key => detect(current[key]));
    }
    return false;
  };

  return detect(obj);
};

// 示例用法
let obj1 = { name: '前端胖头鱼1' };
let obj2 = { name: '前端胖头鱼2' };
obj1.obj = obj2;
obj2.obj = obj1;

let obj = { name: '前端胖头鱼1' };
obj.child = obj;

console.log(isCyclic(obj1)); // true
console.log(isCyclic(obj)); // true



// 第50道
function hasCircularReference(obj) {
  const visited = new Set();
  
  function check(obj) {
      if (obj && typeof obj === 'object') {
          if (visited.has(obj)) {
              return true;
          }
          visited.add(obj);
          for (const key in obj) {
              if (check(obj[key])) {
                  return true;
              }
          }
      }
      return false;
  }
  
  return check(obj);
}


// 第49道
class Scheduler {
  constructor () {
    this.queue = []
    this.maxCount = 2
    this.runCount = 0
  }
  // promiseCreator执行后返回的是一个Promise
  add(promiseCreator) {
    // 小于等于2，直接执行
    this.queue.push(promiseCreator)
    this.runQueue()
  }

  runQueue () {
    // 队列中还有任务才会被执行
    if (this.queue.length && this.runCount < this.maxCount) {
      // 执行先加入队列的函数
      const promiseCreator = this.queue.shift()
      // 开始执行任务 计数+1    
      this.runCount += 1

      promiseCreator().then(() => {
        // 任务执行完毕，计数-1
        this.runCount -= 1
        this.runQueue()
      })
    }
  }
}
   
const timeout = time => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
  
const scheduler = new Scheduler()
  
const addTask = (time,order) => {
  scheduler.add(() => timeout(time).then(()=>console.log(order)))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')






LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    const value = this.cache.get(key)
    // 更新位置
    this.cache.delete(key)
    this.cache.set(key, value)

    return value
  }

  return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */

// 第48道题
LRUCache.prototype.put = function (key, value) {
  // 已经存在的情况下，更新其位置到”最新“即可
  // 先删除，后插入
  if (this.cache.has(key)) {
    this.cache.delete(key)
  } else {
    // 插入数据前先判断，size是否符合capacity
    // 已经>=capacity，需要把最开始插入的数据删除掉
    // keys()方法得到一个可遍历对象,执行next()拿到一个形如{ value: 'xxx', done: false }的对象
    if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value)
    }
  }

  this.cache.set(key, value)
};

const lRUCache = new LRUCache(2)

console.log(lRUCache.put(1, 1)) // 缓存是 {1=1}
console.log(lRUCache.put(2, 2)) // 缓存是 {1=1, 2=2}
console.log(lRUCache.get(1))    // 返回 1



// 第46道
const getType = (s) => {
  const r = Object.prototype.toString.call(s)

  return r.replace(/\[object (.*?)\]/, '$1').toLowerCase()
}

console.log(getType())
console.log(getType(null))







// https://leetcode-cn.com/problems/search-insert-position/
// 第42道. 搜索插入位置

const searchInsert = (nums, target) => {
  let i = 0
  let j = nums.length - 1
  let midIndex = 0

  while (i <= j) {
    midIndex = Math.floor((i + j) / 2)
    const midValue = nums[ midIndex ]

    if (midValue === target) {
      return midIndex
    } else if (midValue < target) {
      i = midIndex + 1
    } else {
      j = midIndex - 1
    }
  }

  return i
}

console.log(searchInsert([1,3,5,6], 7))





// 第40道

let arr1=[]
arr.rev

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



function intersect(nums1, nums2) {
  const countMap = {};
  const result = [];

  // 统计 nums1 中每个元素的出现次数
  for (const num of nums1) {
      countMap[num] = (countMap[num] || 0) + 1;
  }

  // 遍历 nums2，找到交集元素
  for (const num of nums2) {
      if (countMap[num] > 0) {
          result.push(num);
          countMap[num]--; // 减少计数，避免重复
      }
  }

  return result;
}


// 金额转千分位
const formatPrice = (number) => {
  number = '' + number

  const [ integer, decimal = '' ] = number.split('.')

  return integer.replace(/\B(?=(\d{3})+$)/g, ',') + (decimal ? '.' + decimal : '')
}

console.log(formatPrice(123456789.3343))





// 第26道
class WordDictionary {
  constructor() {
      this.words = [];
  }

  addWord(word) {
      this.words.push(word);
  }

  search(word) {
      return this.words.some(w => {
          if (w.length !== word.length) return false;
          for (let i = 0; i < word.length; i++) {
              if (word[i] !== '.' && word[i] !== w[i]) {
                  return false;
              }
          }
          return true;
      });
  }
}


// 第25道
const validPalindrome = (s) => {
  const isPalindrome = (str, left, right) => {
      while (left < right) {
          if (str[left] !== str[right]) return false;
          left++;
          right--;
      }
      return true;
  };

  let left = 0, right = s.length - 1;

  while (left < right) {
      if (s[left] !== s[right]) {
          return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
      }
      left++;
      right--;
  }

  return true;
};

// 测试
console.log(validPalindrome('aba'));    // true
console.log(validPalindrome('abca'));   // true
console.log(validPalindrome('abc'));    // false
console.log(validPalindrome("deeee"));  // true




// 第24道题
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


// 第二题
const instanceOf1 = (obj, func) => {
  if (!(obj && ['object', 'function'].includes(typeof obj))) {
    return false
  }
  
  let proto = Object.getPrototypeOf(obj)


  if (proto === func.prototype) {
    return true
  } else if (proto === null) {
    return false
  } else {
    return instanceOf1(proto, func)
  }
}



// 第13道
// 手机号分割
// 适合纯11位手机
const splitMobile = (mobile, format = '-') => {
  return String(mobile).replace(/(?=(\d{4})+$)/g, format)
}
// 适合11位以内的分割
const splitMobile2 = (mobile, format = '-') => {
  return String(mobile).replace(/(?<=(\d{3}))/, format).replace(/(?<=([\d\-]{8}))/, format)
}

console.log(splitMobile(18379802267))
console.log(splitMobile2(18379876545))





String.prototype.strim1 = function () {
  return this.replace(/^\s+|\s+$/g, '')
}

String.prototype.strim2 = function () {
  return this.replace(/^\s+(.*?)\s+$/, '$1')
}

let str = '    aaaa   '

console.log(str.length)

console.log(str)







//第一道
function compose(...fns) {
  return function (x) {
      let result = x;
      for (let i = fns.length - 1; i >= 0; i--) {
          result = fns[i](result);
      }
      return result;
  };
}

// 示例函数
function fn1(x) { return x + 1; }
function fn2(x) { return x + 2; }
function fn3(x) { return x + 3; }
function fn4(x) { return x + 4; }

// 使用 compose
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 11 




function isEqual(obj1, obj2) {
  // 检查是否为相同的引用
  if (obj1 === obj2) return true;

  // 检查是否为对象
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
      return false;
  }

  // 获取对象的属性键
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // 比较属性数量
  if (keys1.length !== keys2.length) return false;

  // 逐个比较属性
  for (let key of keys1) {
      if (!keys2.includes(key) || !isEqual(obj1[key], obj2[key])) {
          return false
      }
  }

  return true;
}

// 示例用法
const objA = { a: 1, b: { c: 2 } };
const objB = { a: 1, b: { c: 2 } };
const objC = { a: 1, b: { c: 3 } };

console.log(isEqual(objA, objB)); // true
console.log(isEqual(objA, objC)); // false


console.log(deepEqual(objA, objB)); // true
console.log(deepEqual(objA, objC)); // false 


