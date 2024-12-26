// let arr=[1,2,2,3]
// function quchong(arr){
// 去重  扁平化  数组转树  树转数组    数组方法  字符串方法
//   let arr1=[]
//   arr.forEach((item)=>{
//     if(!arr1.includes(item)){
//       arr1.push(item)
//     }
//   })
//   return arr1
// }

// let arr =[1,2,2,3]
// function quchong(arr){
//   let arr1=[]
//   arr.forEach((item)=>{
//     if(!arr1.includes(item)){
//       arr1.push(item)
//     }
//   })
//   return arr1
// }
// let str='abdcds'
// console.log(quchong(arr))
// console.log(str.indexOf('d'))
// console.log(str.split('').filter((item)=>{
//   return item!='d'&&item!='a'
// }))

let arr=[1,2,[2,3]]
function flat(arr){
  let arr1=[]
  arr.forEach((item)=>{
    if(Array.isArray(item)){
      arr1.push(...flat(item))
    }else{
      arr1.push(item)
    }
  })
  return arr1
}
console.log(flat(arr))

// console.log(quchong(arr))  1/150

// function arrtotree(arr,parentId){
//    return  arr.filter((item)=>item.id==parentId).map((item)=>{
//     let child=arrtotree(arr,item.id)
//     if(child.length){
//       item.child=child
//     }
//     return item
    
//    })
// }


// function treetoarr(tree,parentId=0){
//   let arr=[]
//   arr.push({name:tree.name,id:tree.id,parentId})
// arr.child.forEach((item)=>{
//   arr.push(...treetoarr(item,tree.id))
// })
// return arr
// }


// function flat(arr){
//   let arr1=[]
//   arr.forEach((item)=>{
//       if(Array.isArray(item)){
//         arr1.push(...flat(item))
//       }
//       else{          
//         arr1.push(item)
//       }
//   })
//   return arr1
// }

  4/150


// instanceof   手写new,create   深拷贝  比较对象  并行限制  发布订阅  手写map  存储cook   柯里化   单次点击   正则化  promise  判断循环引用  多少钱  lru   25道算法题  hot90道    css小兔仙加上一些特殊的  防抖节流
// const getType = (s) => {
//   const r = Object.prototype.toString.call(s)

// return  r.replace(/\[object (.*?)\]/,'$1')
// }

// console.log(getType([1,2,3]))


// function dfs(fn){
//   let timer=null
//   return function(){
//     return timer?timer:timer=fn().finally(timer=null)
//   }
// }


// function dfs(fn){
//   let timer=null
//   return function(){
//     return timer?timer:timer=fn().finally(timer=null)
//   }
// }

// function once(fn) {
//   let result;
//   let called = false;
  
//   return function (args) {
//     if (!called) {
//       called = true;
//       result = fn(args)
//     }
//     return result;
//   };
// }


// class scheduler {
//   constructor(max){
//     this.max=max
//     this.runtotal=0
//     this.queue=[]
//   }
//   add(fn){
//     this.queue.push(fn)
//     this.run()
//   }
//   run(){
//       if(this.queue.length&&this.runtotal<this.max){
//         this.runtotal++
//         let fn=this.queue.shift()
//         fn().then((res)=>{
//           this.runtotal--
//           this.run()
//         })
//       }
//   }
// }


// const create = (prop, props) => {
//   if (![ 'object', 'function' ].includes(typeof prop)) {
//     throw new TypeError(`Object prototype may only be an Object or null: ${prop}`)
//   }
//   // 创建构造函数
//   const Ctor = function () {}
//   // 赋值原型
//   Ctor.prototype = prop
//   // 创建实例
//   const obj = new Ctor()
//   // 支持第二个参数
//   if (props) {
//     Object.defineProperties(obj, props)
//   }
//   // 支持空原型
//   if (prop === null) {
//     obj.__proto__ = null
//   }

//   return obj
// }

// const _new = function (func, ...args) {
//   if (typeof func !== 'function') {
//     throw 'func must be a function'
//   }
//   // 这里有点求快了，应该手动模拟一下
//   let obj = Object.create(func.prototype)
//   // 实际模拟如下
//   /**
//   let Ctor = function () {}

//   Ctor.prototype = func.prototype
//   Ctor.prototype.constructor = func

//   let obj = new Ctor()
//  */
//   let result = func.apply(obj, args)

//   if (typeof result === 'object' && result !== null || typeof result === 'function') {
//     return result
//   } else {
//     return obj
//   }
// }

// const splitMobile = (mobile, format = '-') => {
//   return String(mobile).replace(/(?=(\d{4})+$)/g, format)
// }


// const storage = {
//   prefix: 'fatFish',
//   timeSign: '|fatFish|',
//   setItem (key, value, time) {
//     // 做一个key的保护
//     key = `${this.prefix}${key}`
//     // 没有传入时间，默认过期时间是一个月，当然也可以是其他时间或者不设置
//     time = time ? new Date(time).getTime() : Date.now() + 24 * 60 * 60 * 31 * 1000
//     // 构造一个形如 1646094676134|fatFish|"前端胖头鱼" 结构的字符串
//     window.localStorage.setItem(key, `${time}${this.timeSign}${JSON.stringify(value)}`)
//   },
//   getItem (key) {
//     key = `${this.prefix}${key}`
//     let value = window.localStorage.getItem(key)

//     if (value) {
//       let index = value.indexOf(this.timeSign)
//       let time = +value.slice(0, index)
//       // 判断时间是否已过期
//       if (time > Date.now()) {
//         value = JSON.parse(value.slice(index + this.timeSign.length))
//       } else {
//         value = null
//         window.localStorage.removeItem(key)
//       }
//     }

//     return value
//   }
// }


// let arr2 = arr.map2(function (it, i, array) {
//   console.log(it, i, array, this)
//   return it * 2
// }, { name: 'fatfish' })

// let str='abc'
// let num=[1,2,3]
// num.reverse()




