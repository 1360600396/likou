// let a1=new Promise(resolve=>{
//   resolve("123")
// })
// let a2=new Promise(resolve=>{
//   resolve("234")
// })
let arr=[]

for(let i=0;i<1;i++){
  let a1=new Promise(resolve=>{
    resolve(`${i}`)
    arr.push(a1)

    a1.then((res)=>{
      console.log(res)
    })
  })
}





  async function some(arr){
    // await Promise.race(arr)

    console.log(arr[0]==arr[1])
    // a1.then((res)=>{
    //   console.log(res)
    // })

    // console.log("123")
 }

 some(arr)