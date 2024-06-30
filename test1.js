let arr=[1,2,3,4,1]
// function norepeat(arr){
//   let  set=new Set(arr)
//   return Array.from(set)

// }

// function norepeat(arr){
  
//   let arr2=arr.filter((value,index,self)=>{
//     return self.indexOf(value)==index
//   })
//   return arr2
// }
function norepeat(arr){
  for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]==arr[i]){
        arr.splice(j,1)
        j--
      }
    }
  }
}
norepeat(arr)
console.log(arr)