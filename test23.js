const swap=(array,i,j)=>{
  return  [array[i],array[j]]=[array[j],array[i]]
}
const insert=(array)=>{
  for(let i=0;i<array.length;i++){
    let mid=i
    for(let j=i+1;j<array.length;j++){
      if(array[j]<array[mid]){
        mid=j
      }
      
    }
    if(mid!=i){
      swap(array,i,mid)
    }
  }
  return array
}
let arr=[-1,-3,5,4,3,7]
console.log(insert(arr))