// 去除空格

String.prototype.strim1 = function () {
  return this.replace(/^\s+|\s+$/g, '')
}
String.prototype.strim2 = function () {
  return this.replace(/^\s+(.*?)\s+$/, '$1')
}

let str = '    aaaa   '

console.log(str.length)

console.log(str)
console.log(str.strim1().length)
console.log(str.strim2().length)

// 电话转为这样的格式183-7980-2267
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


/**
 * new 的执行过程
 * 博客里面有一种简单的方法
 * 1. 创建一个对象obj
 * 2. 该对象的__proto__指向构造函数Fn的原型prototype
 * 3. 执行构造函数Fn的代码，往新创建的对象obj上添加成员属性和方法
 * 4. 返回这个新的对象obj
 */

const _new = function (func, ...args) {
  if (typeof func !== 'function') {
    throw 'func must be a function'
  }
  // 这里有点求快了，应该手动模拟一下
  let obj = Object.create(func.prototype)
  // 实际模拟如下
  /**
  let Ctor = function () {}

  Ctor.prototype = func.prototype
  Ctor.prototype.constructor = func

  let obj = new Ctor()
 */
  let result = func.apply(obj, args)

  if (typeof result === 'object' && result !== null || typeof result === 'function') {
    return result
  } else {
    return obj
  }
}

let Person = function (name, sex) {
  this.name = name
  this.sex = sex
}

Person.prototype.showInfo = function () {
  console.log(this.name, this.sex)
}

let p1 = _new(Person, '前端胖头鱼', 'sex')

console.log(p1)

// composes函数
// https://juejin.cn/post/6968713283884974088#heading-1
// 用法如下:
function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11

function compose(...fn) {
  return fn.reduce((result, it) => {
    return (...args) => {
      return result(it(...args))
    }
  }, (it) => it)
}


const deepClone = (target, cache = new Map()) => {
  const isObject = (obj) => typeof obj === 'object' && obj !== null

  if (isObject(target)) {
    // 解决循环引用
    const cacheTarget = cache.get(target)
    
    if (cacheTarget) {
      return cacheTarget
    }

    let cloneTarget = Array.isArray(target) ? [] : {}

    cache.set(target, cloneTarget)

    for (const key in target) {
      const value = target[ key ] 
      cloneTarget[ key ] = isObject(value) ? deepClone(value, cache) : value
    }

    return cloneTarget
  } else {
    return target
  }
}


// 深拷贝
// 自己写的博客里面有比较简单的方法
const deepClone2 = (target, cache = new Map()) => {
  const isObject = (obj) => typeof obj === 'object' && obj !== null
  const forEach = (array, cb) => {
    const leng = array.length
    let i = -1

    while (++i < leng) {
      cb(array[ i ])
    }
  }

  if (isObject(target)) {
    const cacheObj = cache.get(target)

    if (cacheObj) {
      return cacheObj
    }

    let cloneTarget = Array.isArray(target) ? [] : {}
    let keys = Object.keys(target)

    cache.set(target, cloneTarget)

    forEach(keys, (key) => {
      const value = target[ key ]
      cloneTarget[ key ] = isObject(value) ? deepClone2(value, cache) : value
    })

    return cloneTarget
  } else {
    return target
  }
}

const target = {
  field1: 1,
  field2: undefined,
  field3: {
      child: 'child'
  },
  field4: [2, 4, 8],
  f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } } },
};

target.target = target;

console.time();
const result1 = deepClone(target);
console.log(result1)
console.timeEnd();

console.time();
const result2 = deepClone2(target);
console.log(result2)
console.timeEnd();