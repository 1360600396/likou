// let arr1=[1,3,4,6]
// let arr2=[2,3,4,5,7]
// const tonum=(arr1,arr2)=>{
//   return [...new Set(arr1.filter((item)=>arr2.includes(item)))]
// }
// console.log(tonum(arr1,arr2))

// let str='  , sbs   ,'
// let huiwen =(str)=>{
//     let str1=str.replace(/[^a-zA-Z\d]/g,'').toLowerCase()
//     console.log(str1)
//     let len=str1.length
//     let n=Math.floor(len/2)
//     for(let i=0;i<n;i++){
//       if(str1[i]!==str1[len-i-1]){
//         return false
//       }

//       }
//       return true

// }
/* console.log(huiwen(str)) */



let str=',,,, abca ,,,'

const huiwen2=(str,flag=true)=>{
  const str1=str.replace(/[^a-zA-Z\d]/g,'').toLowerCase()
  let l=0
  let r=str1.length-1
  while(l<r&&str1[l]===str1[r]) l++,r--
  if(l>=r) return true
  if(flag==true) return huiwen2(str.slice(l,r),false)||huiwen2(str.slice(l+1,r+1),false)
    return false
}
console.log(huiwen2(str))