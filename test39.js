function rev1(arr,arr1){
  let map=new Map()
 for(let item of arr){
    if(!map.get(item)){
      map.set(item,1)
    }else{
      map.set(item,(map.get(item)+1))
    }

 }
 for(let item of arr1){
  if(!map.get(item)){
    return false
  }else{
    map.set(item,(map.get(item)-1))
  }
}
for(let item of map){
  if(item[1]!=0){
    return false
  }

}
return true
}
console.log(rev1('acddd','addcd'))