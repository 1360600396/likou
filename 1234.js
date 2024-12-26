function encrtpystring(str,num){
  let str1=str.split('')

    for(let i=0;i<str1.length;i++){
      let item=str1[i]
      if(item>='a'&&item<='z'){
        str1[i]=String.fromCharCode(item.charCodeAt(0)+num)
      }
      if(item>='A'&&item<='Z'){
        str1[i]=String.fromCharCode(item.charCodeAt(0)+num)
      }
    }
console.log(str1.join(''))

}
encrtpystring('hello, Word 123',1)

// const range =[
//   [12,18],
//   [8,12],
//   [0,4],
//   [20,22],
//   [2,5],
//   [19,25]
// ]
// function mergeRanges(ranges){
//     let num=ranges.sort((a,b)=>a[0]-b[0])
//     let num1=[]
//     num1.push(num[0])
//     for(let i=1;i<num.length;i++){
//       if(num1[num1.length-1][1]>=num[i][0]){
//         num1[num1.length-1][1]=Math.max(num[i-1][1],num[i][1])
//       }else{
//         num1.push(num[i])
//       }
//     }
//     let sum=0
//     for(let item of num1){
//      sum+=(item[1]-item[0]) 
//     }

//     let obj={
//       ranges:num1,
//       sum:sum
//     }
//     return obj
// }

// console.log(mergeRanges(range))