const move=(array)=>{
  let j=0
  for(let i=0;i<array.length;i++){
    if(array[i]!=0){
      array[j]=array[i]
      j++
    }
   
  }
  for(let n=j;n<array.length;n++){
    array[n]=0
  }
   return array
}
let arr=[5,0,6,0,3]
console.log(move(arr))


const move1=(arr)=>{
  let j=0
  for(let i=0;i<arr;i++){
    if(arr[i]!=0){
      arr[j]=arr[i]
      j++
    }
  }
  for(let n=j;j<arr.length;j++){
    arr[n]=0

  }
  return arr
}