const swap=(array,i,j)=>{
  return  [array[i],array[j]]=[array[j],array[i]]
}

const boble=(array)=>{
  for(let i=0;i<array.length-1;i++){
    for(let j=0;j<array.length-i-1;j++){
      if(array[j]>array[j+1]){
        swap(array,j,j+1)
      }
    }
  }
  return array
}

let arr=[5,4,2,7]
console.log(boble(arr))