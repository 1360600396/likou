const intersect=(num1,num2)=>{
  num1.sort((a,b)=>a-b)
  num2.sort((a,b)=>a-b)
  let res=[]
  let l=0
  let r=0
  while(l<num1.length&&r<num2.length){
    if(num1[l]==num2[r]){
      res.push(num1[l])
      l++
      r++
    }else {
      num1[l]<num2[r]?l++:r++
    }
  }
  return res
}
let num1=[1,2,3],num2=[2,3]
console.log(intersect(num1,num2))





let intersect1=(num1,num2)=>{
  num1.sort((a,b)=>a-b)
  num2.sort((a,b)=>a-b)
  let l=0,r=0
  let res=[]
  while(l<num1.length&&r<num2.length){
    if(num1[l]==num2[r]){
      res.push(num1[1])
      l++
      r++
    }else{
      num1[1]<num2[r]?l++:r++
    }
  }
  return res
}