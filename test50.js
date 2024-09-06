const { time } = require("echarts")

let new1 =function(fun,...ages){
  let obj=Object.create(fun.prototype)
    let res=fun.call(obj,...ages)
  if(typeof res=='object'&&typeof res=='function'&&typeof res!==null){
    return res
  }else{
    return obj
  }
}

function seq(name,age){
    this.name=name
    this.age=age
}
let p1=new1(seq,13,12)
console.log(p1)


let odd=function(head){
    if(!head)return head
    if(head.next==null)return head
    let odd=head,even=head.next,even1=head.next
    while(even!=null&&even.next!==null){
      odd.next=odd.next.next
      odd=odd.next
      even.next=even.next.next
      even=even.next
    }
    odd.next=even1
    return head
}


let quick=function(arr){
    if(arr.length<=1){
      return arr
    }
    let len=arr.length
    let mid=Math.floor(len/2)
    let midvalue=arr[mid]
    let index=0
    let left=[]
    let right=[]
    while(index<len){
      if(arr[index]<midvalue){
        left.push(arr[index])
      }else if(arr[index]>midvalue){
        right.push(arr[index])
      }
      index++
    }
    return quick(left).concat([midvalue],quick(right))
}
console.log(quick([2,1,3,4,0]))

let bubble=function(arr){
  let len=arr.length
  for(let i=0;i<len;i++){
    for(let j=0;j<len-i;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
      }
    }
  }
  return arr
}
console.log(bubble([2,1,3]))

let select=function(arr){
  for(let i=0;i<arr.length;i++){
    let mid=i
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]<arr[i]){
        mid=j
      }
    }
    if(mid!=i){
      [arr[mid],arr[i]]=[arr[i],arr[mid]]
    }
    return arr

  }
}
console.log(select([3,2,1,-1]))

let instanceof1=function(obj,fun){
   let obj1= fun.prototype
   
   if(obj._protot__==obj1){
    return true
   }else if(!obj._protot__){
    return false
   }else{
    return instanceof1(obj._protot__,fun)
   }
}

let insert=function(arr){
  for(let i=1;i<arr.length;i++){
    let j=i-1
    let value=arr[i]
    while(j>=0&&arr[j]>value){
      arr[j+1]=arr[j]
      j--
    }
    arr[j+1]=value
    return arr
  }
}
console.log(insert([3,2,4]))

Promise.all=function(arr){
  return new Promise((resolve,reject)=>{
    let count =0
    let res=[]
    arr.forEach((item)=>{
      Premise.resolve(item).then((res)=>{
          count++
          res[count-1]=res
          if(count==arr.length){
            resolve(res)
          }
      }).catch(reject())
    })
  })
}
/* 获取webpck.config.js下面所有的配置参数
初始化complier对象，注册plug插件，使用插件监听webpack生命周期事件，
不同的环节进行不同的处理，然后开始编译，以entry为入口，开始解析文件
生成ast抽象语法树，查找依赖递归下去，递归的过程中，根据文件的类型和loader的
配置，调用相应的loader对不同文件


*/
// function sert(arr){
//   for(let i=1;i<arr.length;i++){
//     let j=i-1
//     let value=arr[i]
//     while(j>=0&&arr[j]>value){
//       arr[j+1]=arr[j]
//       j--
//     }
//     arr[j+1]=value
//   }
//   return arr
// }
// console.log(sert([2,1,3]))


function flat(arr){
  let res=[]
  arr.forEach((item)=>{
    if(Array.isArray(item)){
      res.push(...flat(item))
    }else{
      res.push(item)
    }
   
  })
  return res
}
console.log(flat([1,[2,3],4]))

function flat2(arr){
  return arr.reduce((prev,cur)=>{
    return prev.concat(Array.isArray(cur)?flat(cur):cur)
  },[])


  // return Array.from(new Set(arr))
}
console.log(flat2([1,[2,3],4]))

// 数组去重 数组扁平化  树转数组  数组转树 url转对象

function toarr(tree,parentid){
  let res=[]
  res.push({id:tree.id,name:tree.name,parentid})
  tree.child.forEach((item)=>{
    res.push(...toarr(item,tree.id))
  })
  return res
}

function  totree(arr,id){
 return arr.filter((item)=>item.parentid==id).map((item)=>{
    let n=totree(arr,item.id)
    if(n.length>=1){
      item.child=n
    }
    return item
  })
}


function bph(arr){
  let res=[]
 for(let i=0;i<arr.length;i++){
  if(!res.includes(arr[i])){
      res.push(arr[i])
  }
 }
 return res
}
console.log(bph([1,2,2,3]))

let  url='http://111.26.29.113:7119/indexs.wlan?userip=100.125.88.47&JLCC-MC-CMNET-BRAS37-BH-HW=&basip=211.137.223.239'

function split1(url){
  let [a,b]=url.split('?')
  let arr=b.split('&')
  let obj={}
  for(let i=0;i<arr.length;i++){
    [a,b]=arr[i].split('=')
    obj[a]=b
  }
  return obj
}
console.log(split1(url))

let arr=[2,2,1]
function sing(arr){
  let map=new Map()
  for(let item of arr){
    if(!map.has(item)){
      map.set(item,1)
    }else{
      map.set(item,map.get(item)+1)
    }
  }
  for(let item of map){
    if(item[1]==1){
      return item[0]
    }
  }
}
console.log(sing(arr))


let arr1= [0,1,0,3,12]
function remove(arr){
  let j=0
  for(let i=0;i<arr.length;i++){
    if(arr[i]!=0){
      arr[j]=arr[i]
      j++
    }
  }
  for(let i=j;i<arr.length;i++){
    arr[i]=0
  }
  
  return arr
}
console.log(remove(arr1))


console.log('123'=='1234')


// function simetime(fun,time){
//   let timer=null
//   function settime(){
//     setTimeout(()=>{
//       fun()
//       settime()
//     },time)
//   }
//   settime()
// }
// simetime(()=>{console.log(1)},1000)

// let arr2=['1.0.1','1.2.1','1.0']
// function compare(num1,num2){
//   let arr=num1.split('.')
//   let arr1=num2.split('.')
//   let max=Math.max(arr.length,arr1.length)
//   for(let i=0;i<max;i++){
//    let a= arr[i]?arr[i]:0
//    let b=arr1[i]?arr1[i]:0
//    if(a==b){

//    }else if(a>b){
//       return 1
//    }else if (a<b){
//     return -1
//    }
//   }

// }
// console.log(arr2.sort((a,b)=>compare(a,b)))

// function promise1(num){
//   return new Promise((resolve,reject)=>{
//     resolve(num+1)
//   })
// }


// function *add(){

//   let num1=  yield  promise1(1)
//   let num2= yield promise1(num1)
//   let num3=yield promise1(num2)
// }
// function generatortoasync(add){
//       let add1=add()
//       return new Promise((resolve)=>{
//         function odd(nextvalue){
//             let {value,done}=add1.next(nextvalue)
//             if(done){
//               resolve(done)
//             }else{
//               value.then(odd(nextvalue)).catch(reject)
//             }
//         }
//         odd(nextvalue)
//       })
// }
// // let fun= 
// generatortoasync(add).then((res)=>{console.log(res)})


// function search(num,target){
//   num.sort((a,b)=>a-b)
//   let left=0
//   let right=num.length-1
//   while(left<=right){
//     let mid=Math.floor((left+right)/2)
//     let midvalue=num[mid]
//     if(midvalue>target){
//       right=mid-1
//     }else if(midvalue<target){
//       left=mid+1
//     }else{
//       return mid
//     }
//   }
// }
// console.log(search([2,1,4],4))

// class hmemmiter {
//   constructor(){
//     this.obj={}
//   }
//   on(event,calback){
//     this.obj[event]=this.obj[event]||[]
//     this.obj[event].push(calback)
//   }
//   emit(event){
//     if(!this.obj[event]){
//       this.obj[event]=[]
//     }
//     this.obj[event].forEach((item)=>item())
//   }
//   off(event){
//     this.obj[event]=undefined
//   }
//   once(event,callback){
//     this.on(event,(...args)=>{
//       callback()
//       this.off(event)
//     })
//   }
// }

// function gettype(s){
//   let type=Object.prototype.toString.call(s)
//   return type.replace(/\[object (.*?)\]/,'$1').toLowerCase()
// }
// console.log(gettype(123))

// function LRU(size){
//   this.map=new Map()
//   this.capacity=size
// }

// LRU.prototype.get=function(key){
  
//     if(this.map.has(key)){
//    let   value=  this.map.get(key)
//     this.map.delete(key)
//       this.map.set(key,value)
//       return value
//     }else{
//       return -1
//     }

// }
// LRU.prototype.set=function(key,value){
//   if(this.map.has(key)){
//     this.map.delete(key)
//   }else{
//     if(this.map.size>=this.capacity){
//       this.map.delete(this.map.keys().next().value)
//     }
//   }
//   this.map.set(key,value)
// }

// class Scheduler {
//   constructor(){
//     this.queue=[]
//     this.runcount=0
//     this.maxcount=2

//   }
//   add(event){
//     this.queue.push(event)
//     this.run()
//   }
//   run(){
//     if(this.queue&&this.runcount<=this.maxcount){
//       let que1=this.queue.shift()
//       this.runcount++
//       que1().then((res)=>{
//         this.runcount--
//         this.run()
//       })
//     }
//   }

// }
// let sch=new Scheduler()

// function createpromise(time){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve()
//     },time)
//   })
// }

// function addtask(time){
//   sch.add(()=>{createpromise(time)})
// }

// function settosto(fn,time){
//   let timer=setInterval(()=>{
//     clearInterval(timer)
//     fn()
//   },time)
// }
const isCyclic = (obj) => {
  let stackSet = new Set()
  let detected = false

  const detect = (obj) => {
    if (obj && typeof obj != 'object') {
      return
    }

    if (stackSet.has(obj)) {
      return detected = true
    }

    stackSet.add(obj)

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        detect(obj[key])
      }
    }

    stackSet.delete(obj)
  }

  detect(obj)

  return detected
}

function createpromise(fn,time){
    return new Promise((resolve,reject)=>{
      resolve(fn())
    },time)
}

function fn(){
  return ()=>{
    console.log("123")
  }
}


Promise.resolve=function(value){
  if(value instanceof Promise){
    return value
  }
  return new Promise((resolve,reject)=>{
    resolve(value)
  })
}



Promise.all = function(Premisearr) {
  // 检查是否是数组
 return new Promise((resolve,reject)=>{
    if(!Array.isArray(Premisearr)){
      reject()
    }
    let count=0
    let arr=[]
    Premisearr.forEach((item,index)=>{
      Promise.resolve(item).then((res)=>{
        arr[index]=res
        count++
        if(count==Premisearr.length){
          resolve(arr)
        }
      }).catch(reject())
    })
 })
};


Array.prototype.map1=function(fn){
  return this.reduce((prev,cur,index)=>{
    return prev.concat(fn(cur,index))
  },[])
}


function compose2(...fn){ 
  return function(args){  
    for(let i=0;i<fn.length;i++){
      args=fn[i](args)
    }
    return args
  }
}


let res=['1','32','123','234234234','123123','2342','1231234']
let map=new Map()
for(let item of res){
    if(!map.has(item.length)){
        map.set(item.length,1)
    }else{
        map.set(item.length,map.get(item)+1)
    }
}
// console.log(1,map.size)
console.log(1,map.size)

