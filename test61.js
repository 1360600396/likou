function func(name1,name2){
  console.log(this.name)
}

let obj={
  name:'zxb'
}


func.call(obj,'zxb','zxb2')
func.apply(obj,['zxb','zxb2'])
let fun=func.bind(obj,'zxb')
fun()

let p=new Promise((resolve,reject)=>{
      resolve()
})


let arr=[1,2,[1,2],3]
for(let item of arr){
  console.log( item)
}

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

console.log(add(1,2))
Promise.all=function(promises){77
  return new Promise((resolve,reject)=>{
    let arr=[]
    let count=0
    promises.forEach((item)=>{
      Promise.resolve(item).then((res)=>{
        arr[count]=res
        count++
        if(count==promises.length){
          return resolve(arr)
        }
      }).catch((reject)=>{
        return reject()
      })
    })
  })
}

// asdasdasdad