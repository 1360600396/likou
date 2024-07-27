// const m=new Map()
// m.set('1','zxb').set('2','asd').set('3','dfg')
// for(let item of m){
//   console.log(item[1])
// }

// console.log(m.get('1'))
// console.log(m.has('1'))

const single=(arr)=>{
  let m=new Map()
  for(let item of arr){
    const num=m.get(item)||0
    m.set(item,num+1)
  }
  for(let item1 of m){
    if(item1[1]==1){
      return item1[0]
    }
  }

}

let num=[1,1,2]
console.log(single(num))