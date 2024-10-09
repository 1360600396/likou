// function fn2(fn1){
//   let bool=false
//   return function(...args){
//     if(bool==true){
//       console.log("undefined")
//       return undefined
//     }
//     bool=true
//     fn1(...args)
//   }

// }

// function fn1(max){
//   console.log(max)
// }

// let fn3=fn2(fn1)

// fn3(3)
// fn3(3)

// Array.prototype.map1=function(fn){
//   let arr=[]
//   this.forEach((index,item)=>{
//     arr.push(fn(index,item))
//   })
//   return arr
// }

// let arr1=[1,2,3]
// let arr2=arr1.map1((item)=>item*2)
// console.log(arr2)


let storage1={
  fish:'now',
  setitem(key,value,time){
     key=`${this.fish}${key}`
     time=time?new Date(time).getTime():Date.now()+365*1000
    window.localStorage.setItem(key,JSON.stringify({time,key}))
  },
  getItemAlign(key){
     key=`${this.fish}${key}`
   let value= window.localStorage.getItem(key)
   if(value>Date.now()){
    return value
   }
   Window.localStorage.removeItem(key)

  }
}

storage1.setitem(1,"zxb")
storage1.getItem(1)