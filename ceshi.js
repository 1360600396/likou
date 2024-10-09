// function fn1(fn) {
//   let boolean = false;
//   return function (...args) {
//     if (boolean == true) {
//       console.log("undefined")
//       return undefined
//     }
//     boolean = true;
//     fn(...args);
//   };
// }

// function fn() {
//   console.log("123");
// }

// let fn2 = fn1(fn);

// fn2()
// fn2()

// function same(nod1,node2){
//   let set=new Set()
//   while(nod1){
//     set.add(nod1)
//     nod1=nod1.partNode
//   }
//   while(node2){
//       if(set.has(node2)){
//         return true
//       }
//       node2=node2.partNode
//   }
//   return false
// }
let a={
  _key:1
}

// Object.defineProperty(a,"key",{
//   get(){
//     this._key++
//     return this._key
//   }, 
//   set(){

//   }
// })
// let a1=new Proxy({b:1},{
//     get(target){
//       return target.b++
//     }
// })


// console.log(a1.b)
// console.log(a1.b)

// function Promise1(fn,time){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve(fn())
//     },time)
//   }
//   )
// }

// function fn(){
//   return function(){
//     return "123"
//   }
// }


// async function dfs(){
//  let a= await Promise1(fn(),1000)
//  console.log(a)
// }
// dfs()

// let obj={
//   0:1,
//   1:2,
//   length:2
// }
// let arr1=Object.values(obj)

// let arr=Array.from(obj)

// console.log(arr1)

let data = {
  name: '前端胖头鱼',
  age: 100
};
let template = `
  我是: {{ name }}
  年龄是: {{ age }}
`;

for(let item in data){
  template= template.split(`{{ ${item} }}`).join(data[item])
}

console.log(template)


function compose(...fn){

  return function(x){
   let res=x
    for(let i=0;i<fn.length;i++){
        res = fn[i](res)
    }
    return res
  }

}

String.prototype.trim1=function(){
 return this.replace(/^\s+|\s+$/g,'')
}
String.prototype.trim2=function(){
  return this.replace(/\s+(.*?)\s+/g,'$1')
 }

let str='   asdasd  '
console.log(str.trim1())


let str2='112312345112312'
let str3 = str2.replace(/(?=(\d{3}))/g, '_'); 
// (/(?=(\d{3}))/g, '_')
// console.log(str3)
console.log(str3)



function instanceof1(func,obj){
  if(func.prototype==obj._proto_){
    return true
  }else if(obj._proto_==null){
    return false
  }else{
    instanceof1(func,obj._proto_)
  }
}


function dfs(str){
  str=str.replace(/[^a-zA-Z/d]/g,'')
  let len=str.length
  let mid=Math.floor(len/2)
  for(let i=0;i<mid;i++){
      if(str[i]!=str[len-i-1]){
        return false
      }
  }
  return true
}
console.log(dfs('   abba  '))



function ceshi(str,left,right){

  // let left=left,right=right
  while(left<right){
    if(str[left]!==str[right]){
      return false
    }
    left++
    right--
  }
  return true
}



function fn(str){
  let left=0,right=str.length-1
  while(left<right){
    if(str[left]!==str[right]){
      return ceshi(str,left+1,right)||ceshi(str,left,right-1)
    }
    left++
    right--
  }
  return true
}
console.log(fn('ba'))


class ex{
    list={

    }
    constructor(){

    }
    add(word){
      let len=word.length
      if(this.list[len]){
        this.list[len].push(word)
      }else{
        this.list[len]=[word]
      }
    }
    search(word){
      let len=word.length
      if(this.list[len]){
     return  this.list[len].some((item)=>{
          for(let i=0;i<item.length;i++){
            if(item[i]!=word[i])return false
            if(word[i]!=='.'&&word[i]!=item[i]){
                return false
            }
          }
          return true
        })
      }else{
       return false
      }
    }
}

function fn2(arr1,arr2){
  let obj={}
  let arr=[]
  for(let i of arr1){
    obj[i]=obj[i]?obj[i]+1:1
  }
  for(let j of arr2){
    if(obj[j]){
      arr.push(j)
      obj[j]--
    }
  }
  return arr
}
console.log(fn2([1,2,3,3],[2,3,3]))


function iscycle(obj){
  let set=new Set()
  function detect(obj){
    if(typeof obj=="function"&&obj){
        if(set.has(obj)){
          return false
        }
        set.add(obj)
        return Object.keys().forEach((item)=>detect(obj[item]))
    }
  }
  return detect(obj)
}


class scheduler{
  constructor(){
    this.countsum=2
    this.list=[]
    this.countnow=0
  }

  add(fn){
    this.list.push(fn)
    this.run()
  }
  run(){
    if(this.countnow<this.countsum&&this.list.length){
      this.countnow++
      let fn1=this.list.shift()
     fn1().then(()=>{
      this.countnow--
      this.run()
     })
    }
  }
}

let Scheduler=new scheduler()

function addtask(time){
  scheduler.add(()=>promise(time))
}

function promise(time){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve()
    },time)
  })
}






