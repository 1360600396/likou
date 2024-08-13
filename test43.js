let a1=new Promise((resolve)=>{
  resolve('123')
})


let a2=new Promise((resolve)=>{
  resolve('1234')
})

console.log(Promise.all([a1,a2]))