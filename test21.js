const quick=(array)=>{
  if(array.length<=1) return array
    
  let len=array.length
  let mid=Math.floor(len/2)
  let left=[]
  let right=[]
  let midvalue=array[mid]
  for(let i=0;i<=len-1;i++){
    if(i==mid) continue
    if(array[i]<midvalue){
      left.push(array[i])
    }else{
      right.push(array[i])
    }
  }

  return quick(left).concat([midvalue],quick(right))
}

let arr=[1,3,2,0]

console.log(quick(arr))