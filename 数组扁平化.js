const array = [1, 2, [3 ]]

// const flat=function (array){
//   let result=[]
// for(let item of array){
//   if(Array.isArray(item)){
//     flat(item).forEach(element => {
//       result.push(element)
//     });
//   }
//   else{
//     result.push(item)
//   }
// }
// return result
// }

// const flat =function (array){
//   // let result=[]
//  return array.reduce((prev,cur)=>{
// return prev.concat(Array.isArray(cur)?flat(cur):cur)
// },[])

// }

 function flat(arr){
  let arr2=[]
  arr.forEach((item)=>{
      if(Array.isArray(item)){
        arr2.push(...flat(item))
      }else{
        arr2.push(item)
      }
  })
  return arr2

 }



console.log(flat(array))


