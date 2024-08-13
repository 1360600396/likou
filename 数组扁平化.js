

const array = [1, 2, [3 ]]

const flat=function (array){
  let result=[]
for(let item of array){
  if(Array.isArray(item)){
    flat(item).forEach(element => {
      result.push(element)
    });
  }
  else{
    result.push(item)
  }
}
return result
}

const flat0 =function (array){
  // let result=[]
 return array.reduce((prev,cur)=>{
return prev.concat(Array.isArray(cur)?flat(cur):cur)
},[])

}

 function flat1(arr){
  let arr2=[]
  arr.forEach((item)=>{
      if(Array.isArray(item)){
        arr2.push(...flat(item))
      }else{
        arr2.push(item)
      }
  })
  return arr2

 }


const flat3=(array)=>{
  return array.reduce((prev,cur)=>{
    return prev.concat(Array.isArray(cur)?flat3(cur):cur)
  },[])
}


// console.log(flat3(array))


const flat4=(array)=>{
  return array.reduce((prev,cur)=>{
    return prev.concat(Array.isArray(cur)?flat4(cur):cur)
  },[])
}



const flat5=(array)=>{
  let res=[]
  for(let item of array){
    if(Array.isArray(item)){
      res.push(...flat5(item))
    }else{
      res.push(item)
    }
  }
  return res
}


function flat12(arr){
  let arr2=[]
  arr.forEach((item)=>{
      if(Array.isArray(item)){
        // arr2.push(...flat(item))
        arr2=arr2.concat(flat12(item))
      }else{
        arr2.push(item)
      }
  })
  return arr2

 }
 console.log(flat12(array))



 function flat12(arr){
  let arr1=[]
  arr.forEach((item)=>{
      if(Array.isArray(item)){
        arr1.push(...flat12(item))
      }else{
        arr1.push(item)
      }
  })
  return arr1
 }
 

 function flat13(arr){
  return arr.reduce((prev,cur)=>{
    return prev.concat(Array.isArray(cur)?flat13(cur):cur)
     
  },[])
 }
 console.log(flat14(array))


 function flat14(arr){
  let arr1=[]
    arr.map((item)=>{
      if(Array.isArray(item)){
        arr1=arr1.concat(flat12(item))
      }else{
        arr1.push(item)
      }
    })
    return arr1
 }