const sometwo=(array)=>{
  let m=new Map()
  for(let item of array){
    let num =m.get(item)||0
    m.set(item,num+1)
  }
  for(let item of m){
    if(item[1]==2){
    return  true
    }
  }
  return false

}

let arr=[1,2,3,1]
console.log(sometwo(arr))