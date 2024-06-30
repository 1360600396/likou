let array=[1,2,2,3,4,4,5]

// for(let i=0;i<array.length;i++){
//   for(let j=i+1;j<array.length;j++){
//       if(array[j]==array[i]){
//         array.splice(j,1)
//         j--
//       }
//   }
// }
// let set=new Set(array)
// let array1=Array.from(set)

// let arr1=[]
// for(let i=0;i<array.length;i++){
//   arr1.includes(array[i])?arr1:arr1.push(array[i])
// }
// let arr1=[]
// for(let i=0;i<array.length;i++){
//   arr1.indexOf(array[i])!==-1?arr1:arr1.push(array[i])
// }
// let  arr1=[]
// function set(arr){
//   arr=Array.from(arr)
//     return arr.filter((item,index)=>{
//       return arr.indexOf(item)===index
//     })
// }

// function set(arr){
//   let arr2=[]
//   arr=Array.from(arr)
//   return arr.reduce((prev,item)=>{
//       return arr2.includes(item)?arr2:arr2.push(item)
//   },[])
// }


//     function newarr(arr) {
//       let arr2=[]
//       return arr.reduce((prev,item)=>{
//          return arr2.includes(item)?arr2:arr2.push(item)
//       },0)
//     }
//     console.log(newarr(arr))