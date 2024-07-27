async function time(){
   let p=await new Promise(resolve=>{
    console.log("zxb")
    resolve("asdasdasd")
  })
   console.log(p)
   console.log(123)
}
console.log(time())