/*
JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。完善下面代码的Scheduler类，使以下程序能够正常输出：
class Scheduler {
  add(promiseCreator) { ... }
  // ...
}
   
const timeout = time => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  }
})
  
const scheduler = new Scheduler()
  
const addTask = (time,order) => {
  scheduler.add(() => timeout(time).then(()=>console.log(order)))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')

// output: 2 3 1 4
整个的完整执行流程：

起始1、2两个任务开始执行
500ms时，2任务执行完毕，输出2，任务3开始执行
800ms时，3任务执行完毕，输出3，任务4开始执行
1000ms时，1任务执行完毕，输出1，此时只剩下4任务在执行
1200ms时，4任务执行完毕，输出4
*/

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



// 实现settimeOut函数
const simulateSetTimeout = (fn, timeout) => {
  let timer = null

  timer = setInterval(() => {
    clearInterval(timer)
    fn()
  }, timeout)

  return () => clearInterval(timer)
}

const cancel = simulateSetTimeout(() => {
  console.log(1)
}, 1000)

setTimeout(() => {
  cancel()
}, 1100)



const jsonstringify = jsonStringify = (data) => {
}

console.log(jsonstringify(undefined))
console.log(jsonstringify(() => { }))
console.log(jsonstringify(Symbol('前端胖头鱼')))
console.log(jsonstringify((NaN)))
console.log(jsonstringify((Infinity)))
console.log(jsonstringify((null)))
console.log(jsonstringify({
  name: '前端胖头鱼',
  toJSON() {
    return {
      name: '前端胖头鱼2',
      sex: 'boy'
    }
  }
}))

console.log(jsonstringify(null) === JSON.stringify(null));
// true
console.log(jsonstringify(undefined) === JSON.stringify(undefined));
// true
console.log(jsonstringify(false) === JSON.stringify(false));
// true
console.log(jsonstringify(NaN) === JSON.stringify(NaN));
// true
console.log(jsonstringify(Infinity) === JSON.stringify(Infinity));
// true
let str = "前端胖头鱼";
console.log(jsonstringify(str) === JSON.stringify(str));
// true
let reg = new RegExp("\w");
console.log(jsonstringify(reg) === JSON.stringify(reg));
// true
let date = new Date();
console.log(jsonstringify(date) === JSON.stringify(date));
// true
let sym = Symbol('前端胖头鱼');
console.log(jsonstringify(sym) === JSON.stringify(sym));
// true
let array = [1, 2, 3];
console.log(jsonstringify(array) === JSON.stringify(array));
// true
let obj = {
  name: '前端胖头鱼',
  age: 18,
  attr: ['coding', 123],
  date: new Date(),
  uni: Symbol(2),
  sayHi: function () {
    console.log("hello world")
  },
  info: {
    age: 16,
    intro: {
      money: undefined,
      job: null
    }
  },
  pakingObj: {
    boolean: new Boolean(false),
    string: new String('前端胖头鱼'),
    number: new Number(1),
  }
}
console.log(jsonstringify(obj) === JSON.stringify(obj));
console.log((jsonstringify(obj)))
console.log(JSON.stringify(obj))

let enumerableObj = {}

Object.defineProperties(enumerableObj, {
  name: {
    value: '前端胖头鱼',
    enumerable: true
  },
  sex: {
    value: 'boy',
    enumerable: false
  },
})

console.log(jsonstringify(enumerableObj))

let obj1 = { a: 'aa' }
let obj2 = { name: '前端胖头鱼', a: obj1, b: obj1 }
obj2.obj = obj2

// console.log(jsonstringify(obj2))
console.log(jsonStringify(BigInt(1)))

// console.log(JSON.stringify(BigInt(1)))


// 1. 转换对象
console.log(JSON.stringify({ name: '前端胖头鱼', sex: 'boy' }))
// 2. 转换普通值
console.log(JSON.stringify('前端胖头鱼'))
console.log(JSON.stringify(1))
console.log(JSON.stringify(true))
console.log(JSON.stringify(null))
// 3. 指定replacer函数
console.log(JSON.stringify({ name: '前端胖头鱼', sex: 'boy', age: 100 }, (key, value) => {
  return typeof value === 'number' ? undefined : value
}))
// 4. 指定数组
console.log(JSON.stringify({ name: '前端胖头鱼', sex: 'boy', age: 100 }, [ 'name' ]))
// 5. 指定space
console.log(JSON.stringify({ name: '前端胖头鱼', sex: 'boy', age: 100 }))
console.log(JSON.stringify({ name: '前端胖头鱼', sex: 'boy', age: 100 }, null , 2))

// 1. 对象中存在这三种值会被忽略
console.log(JSON.stringify({
  name: '前端胖头鱼',
  sex: 'boy',
  // 函数会被忽略
  showName () {
    console.log('前端胖头鱼')
  },
  // undefined会被忽略
  age: undefined,
  // Symbol会被忽略
  symbolName: Symbol('前端胖头鱼')
}))

// 2. 数组中存在着三种值会被转化为null

console.log(JSON.stringify([
  '前端胖头鱼',
  'boy',
  // 函数会被转化为null
  function showName () {
    console.log('前端胖头鱼')
  },
  //undefined会被转化为null
  undefined,
  //Symbol会被转化为null
  Symbol('前端胖头鱼')
]))

// 3.单独转换会返回undefined
console.log(JSON.stringify(
  function showName () {
    console.log('前端胖头鱼')
  }
))
console.log(JSON.stringify(undefined))
console.log(JSON.stringify(Symbol('前端胖头鱼')))

console.log(JSON.stringify([new Number(1), new String("前端胖头鱼"), new Boolean(false)]))

console.log(JSON.stringify({
  name: Symbol('前端胖头鱼'),
}))

console.log(JSON.stringify({
  [ Symbol('前端胖头鱼') ]: '前端胖头鱼',
}, (key, value) => {
  if (typeof key === 'symbol') {
    return value
  }
}))

console.log(JSON.stringify({
  age: NaN,
  age2: Infinity,
  name: null
}))

const toJSONObj = {
  name: '前端胖头鱼',
  toJSON () {
    return 'JSON.stringify'
  }
}

console.log(JSON.stringify(toJSONObj))

const d = new Date()

console.log(d.toJSON())
console.log(JSON.stringify(d))

let cyclicObj = {
  name: '前端胖头鱼',
}

cyclicObj.obj = cyclicObj

// console.log(JSON.stringify(cyclicObj))
let enumerableObj1 = {}

Object.defineProperties(enumerableObj, {
  name: {
    value: '前端胖头鱼',
    enumerable: true
  },
  sex: {
    value: 'boy',
    enumerable: false
  },
})

console.log(JSON.stringify(enumerableObj))

const alsoHuge = BigInt(9007199254740991)

console.log(JSON.stringify(alsoHuge))
