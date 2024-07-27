function Factory(obj) {
  function fun() {}
  fun.prototype = obj;
  return new fun();
}

const obj2 = {
  name: "佩奇",
  family: {  
    father: "猪爸爸",
  },
}

function parent(name) {
  this.name = name;  
}
 
function son() {}
son.prototype =new parent("123"); 
let obj11 = new son();
// console.log(obj11.name)

let obj = Factory(obj2);
// console.log(obj.name);


// function parent1(name){
//   this.name=name
// }

// parent1.prototype.saihe=function(){

// }

// function son(){
//   parent1.call(this,'zxb')
// }

// let obj12=new son()


function parent1(name){
  this.name=name
}

parent1.prototype.saihe=function(){

}

function son(qq,zz,age){
  parent1.call(this,age)
  this.qq=qq
  this.zz=zz

}

son.prototype=new parent1()

let obj12=new son(123,234,234)

console.log(obj12.name)

function str1(object){
  let obj=Object.create(object)
  obj.action=function(){
    console.log("123")
  }
  return obj
}

let l1=str1(obj2)

function create(son,parent){
  const prototype=Object.create(parent.prototype)
  son.prototype=prototype
  prototype.constructor=son
}

function parent(age){
  this.age=age

}
parent.prototype.sahei=function(){

}

function son(age){
parent.call(this,age)
}
son.prototype=new parent

create(son,parent)

let gae=new son(14)



class person {
  name='123'
  constructor(age){
      this.age=age
  }
  sahei(){
    console.log("123")
  }
}

class teacher extends person{
  name1='1234'
    constructor(name){
      this.name=name
    }
    sahei(){
      console.log("123")
    }
}
let a=new teacher()