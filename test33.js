const p1=new Promise((resolve,reject)=>{
resolve('zxb')

})
Promise.reject('zxb').then(res=>console.log(res)).catch(res=>console.log(res))

p1.then(res=>{
  console.log(res)
})

// let url='https://juejin.cn/user/2276433932859162/search?search_type=0&abc=2'
// let arr=url.split('?')[1].split('&')
// let object={}

// for(let item of arr){
//   let a=item.split('=')[0]
//   let b=item.split('=')[1]
//   object[a]=b

// }
// console.log(object)


const obj={
  name:'123123123'
}
function fun(arr){
  console.log(arr)
  console.log(this.name)
}

// fun.call(obj,'123')

Function.prototype.mycall=function(obj,...arge){
  let a=Symbol()
  obj[a]=this
  const res=obj[a](...arge)
  delete obj[a]
  return res
}

fun.mycall(obj,'123')

Function.prototype.mybind=function(obj,...arge){
  return function(...arge2){
    return this.call(obj,[...arge,...arge2])
  }
}


Function.prototype.call1=function(obj,...arge){
  let a=Symbol()
  obj[a]=this
  const a1=obj[a](...arge)
  delete obj[a]
  return a1
}
Function.prototype.mybind=function(obj,...arge2){
  return function(...arge1){
    return this.call(obj,[...arge1,...arge2])
  }
}
