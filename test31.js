const twosum=(array,sum)=>{
  for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
      if(array[i]+array[j]==sum){
        return [i,j]
      }
    }
  }
  return [-1.-1]
}
let num=[1,2,3]
console.log(twosum(num,3))



let twosum1=(arr,sum)=>{
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]+arr[j]==sum){
        return [i,j]
      }
    }
  }
}