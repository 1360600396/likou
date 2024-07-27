// 704. 二分查找
/**
 * 
给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。


示例 1:

输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
示例 2:

输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
 

提示：

你可以假设 nums 中的所有元素是不重复的。
n 将在 [1, 10000]之间。
nums 的每个元素都将在 [-9999, 9999]之间。
 */
//  这个解答很详细
const search = (nums, target) => {
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

  return -1
}

console.log(search([-1,0,3,5,9,12], 9))

// object.create

const create = (prop, props) => {
  if (![ 'object', 'function' ].includes(typeof prop)) {
    throw new TypeError(`Object prototype may only be an Object or null: ${prop}`)
  }
  // 创建构造函数
  const Ctor = function () {}
  // 赋值原型
  Ctor.prototype = prop
  // 创建实例
  const obj = new Ctor()
  // 支持第二个参数
  if (props) {
    Object.defineProperties(obj, props)
  }
  // 支持空原型
  if (prop === null) {
    obj.__proto__ = null
  }

  return obj
}

// 1. bject.create常规使用
const person = {
  showName () {
    console.log(this.name)
  }
};
const me = Object.create(person)
const me2 = create(person)

me.name = '前端胖头鱼'
me2.name = '前端胖头鱼'

me.showName()
me2.showName()
// 2. 创建一个原型为null的空对象
const emptyObj = Object.create(null)
const emptyObj2 = create(null)

console.log(emptyObj)
console.log(emptyObj2)

// 3. propertiesObject参数

const props = {
  // foo会成为所创建对象的数据属性
  foo: {
    writable:true,
    configurable:true,
    value: "hello"
  },
  // bar会成为所创建对象的访问器属性
  bar: {
    configurable: false,
    get: function() { return 10 },
    set: function(value) {
      console.log("Setting `o.bar` to", value);
    }
  }
}

let o = Object.create(Object.prototype, props)
let o2 = create(Object.prototype, props)

o.bar = '前端胖头鱼'
o2.bar = '前端胖头鱼'

console.log(o.foo)
console.log(o.bar)

console.log(o2.foo)
console.log(o2.bar)


// 发布订阅
class EventEmitter {
  constructor () {
    this.events = {}
  }
  // 事件监听
  on (evt, callback, ctx) {
    if (!this.events[ evt ]) {
      this.events[ evt ] = []
    }
    
    this.events[ evt ].push(callback)

    return this
  }
  // 发布事件
  emit (evt, ...payload) {
    const callbacks = this.events[ evt ]

    if (callbacks) {
      callbacks.forEach((cb) => cb.apply(this, payload))
    }

    return this
  } 
  // 删除订阅
  off (evt, callback) {

    // 啥都没传，所有的事件都取消
    if (typeof evt === 'undefined') {
      delete this.events
    } else if (typeof evt === 'string') {
      // 删除指定事件的回调 
      if (typeof callback === 'function') {
        this.events[ evt ] = this.events[ evt ].filter((cb) => cb !== callback)
      } else {
        // 删除整个事件
        delete this.events[ evt ]
      }
    }

    return this
  }
  // 只进行一次的事件订阅
  once (evt, callback, ctx) {
    const proxyCallback = (...payload) => {
      callback.apply(ctx, payload)
      // 回调函数执行完成之后就删除事件订阅
      this.off(evt, proxyCallback)
    }

    this.on(evt, proxyCallback, ctx)
  }
}

// 测试

const e1 = new EventEmitter()

const e1Callback1 = (name, sex) => {
  console.log(name, sex, 'evt1---callback1')
}
const e1Callback2 = (name, sex) => {
  console.log(name, sex, 'evt1---callback2')
}
const e1Callback3 = (name, sex) => {
  console.log(name, sex, 'evt1---callback3')
}

e1.on('evt1', e1Callback1)
e1.on('evt1', e1Callback2)
e1.once('evt1', e1Callback3)
e1.emit('evt1', '前端胖头鱼', 'boy')
console.log('------尝试删除e1Callback1------')
e1.off('evt1', e1Callback1)
e1.emit('evt1', '前端胖头鱼', 'boy')


// 获取数据类型

const getType = (s) => {
  const r = Object.prototype.toString.call(s)

  return r.replace(/\[object (.*?)\]/, '$1').toLowerCase()
}

console.log(getType())
console.log(getType(null))
console.log(getType(1))
console.log(getType('前端胖头鱼'))
console.log(getType(true))
console.log(getType(Symbol('前端胖头鱼')))
console.log(getType({}))
console.log(getType([]))



var LRUCache = function (capacity) {
  // 用数组记录读和写的顺序
  this.keys = []
  // 用对象来保存key value值
  this.cache = {}
  // 容量
  this.capacity = capacity
}

LRUCache.prototype.get = function (key) {
  // 如果存在
  if (this.cache[key]) {
    // 先删除原来的位置
    remove(this.keys, key)
    // 再移动到最后一个，以保持最新访问
    this.keys.push(key)
    // 返回值
    return this.cache[key]
  }
  return -1
}


// lru
LRUCache.prototype.put = function (key, value) {
  if (this.cache[key]) {
    // 存在的时候先更新值
    this.cache[key] = value
    // 再更新位置到最后一个
    remove(this.keys, key)

    this.keys.push(key)
  } else {
    // 不存在的时候加入
    this.keys.push(key)
    this.cache[key] = value
    // 容量如果超过了最大值，则删除最久未使用的（也就是数组中的第一个key）
    if (this.keys.length > this.capacity) {
      removeCache(this.cache, this.keys, this.keys[0])
    }
  }
}

// 移出数组中的key
function remove(arr, key) {
  if (arr.length) {
    const index = arr.indexOf(key)

    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

// 移除缓存中 key
function removeCache(cache, keys, key) {
  cache[key] = null
  remove(keys, key)
}

const lRUCache = new LRUCache(2)

console.log(lRUCache.put(1, 1)) // 缓存是 {1=1}
console.log(lRUCache.put(2, 2)) // 缓存是 {1=1, 2=2}
console.log(lRUCache.get(1))    // 返回 1
console.log(lRUCache.put(3, 3)) // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log(lRUCache.get(2))    // 返回 -1 (未找到)
console.log(lRUCache.put(4, 4)) // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
console.log(lRUCache.get(1) )   // 返回 -1 (未找到)
console.log(lRUCache.get(3))    // 返回 3
console.log(lRUCache.get(4) )   // 返回 4



/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = new Map()
  this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
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

const lRUCache1 = new LRUCache(2)

console.log(lRUCache.put(1, 1)) // 缓存是 {1=1}
console.log(lRUCache.put(2, 2)) // 缓存是 {1=1, 2=2}
console.log(lRUCache.get(1))    // 返回 1
console.log(lRUCache.put(3, 3)) // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log(lRUCache.get(2))    // 返回 -1 (未找到)
console.log(lRUCache.put(4, 4)) // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
console.log(lRUCache.get(1) )   // 返回 -1 (未找到)
console.log(lRUCache.get(3))    // 返回 3
console.log(lRUCache.get(4) )   // 返回 4