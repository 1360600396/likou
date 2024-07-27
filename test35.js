const obj = {
      name: '佩奇'
    }
   
    const newObj = {}
    Object.assign(newObj, obj)
    // console.log(newObj)
    console.log(newObj === obj)  // false
    newObj.name = '乔治'
    console.log(obj)
    console.log(newObj)

    const newObj1 = { ...obj }
    console.log(newObj1 === obj)  // false

    const obj2 = {
      name: '佩奇',
      family: {
        father: '猪爸爸'
      }
    }
    const newObj2 = { ...obj2 }
    // console.log(newObj)
    newObj2.family.father = 'dad'
    console.log(newObj2)
    console.log(obj2)

function clone(obj){
  let newobj=Array.isArray(obj)?[]:{}
 try{
  for(let item in obj){
    if(typeof obj[item]==="object"){
      newObj[item]=clone(item)
      }else{
        newObj[item]=item
      }
   
  

  }
 }catch(error){
    console.log(error.message)
    // throw new Error('')
 }finally{
  console.log("执行完毕")
 }
  return newobj
}

let new1=clone(obj2)
console.log(new1===obj2)


