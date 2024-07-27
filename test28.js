const remove =(array)=>{
 let p1=0,p2=0
 while(p2<array.length){
  if(array[p1]!=array[p2]){
    p1++
    array[p1]=array[p2]
  }
  p2++
}
return array.slice(0,p1+1)
}
let arr=[1,1,2,3,3]

console.log(remove(arr))


const move=(arr)=>{
  let p1=0,p2=0
  while(p2<arr.length){
    if(arr[p1]!=arr[p2]){
      p1++
      arr[p1]=arr[p2]
    }
    p2++
  }
}