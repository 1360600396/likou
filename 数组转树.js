// 数组转树

const array = [
  { id: 1, name: '部门1', parentId: 0 },
  { id: 2, name: '部门2', parentId: 1 },
  { id: 3, name: '部门3', parentId: 1 },
  { id: 4, name: '部门4', parentId: 2 },
  { id: 5, name: '部门5', parentId: 2 },
  { id: 6, name: '部门6', parentId: 3 },
  { id: 7, name: '部门7', parentId: 4 },
];

// function totree(array,parentId=0){
// return array.filter(item=>item.parentId==parentId).map(item=>{
//   const child=totree(array,item.id)
//   if(child.length>0){
//     item.child=child
//   }
//   return item
// })
// }
  // function arrtotree(arr,id=0){
  //   return arr.filter((item)=>item.parentId==id).map((item)=>{
  //     let child=arrtotree(arr,item.id)
  //     if(child.length>0){
  //       item.child=child
  //     }
  //     return item

  //   })
  // }

  // // 思路先过滤出父节点，然后使用map遍历，如果子节点有值就给父节点添加一个child属性，最后返回
  // function arrtotree1(array1,id=0){
  // return array1.filter(item=>item.parentId==id).map(item=>{
  //   let child=arrtotree1(array1,item.id)
  //   if(child.length>0){
  //     item.child=child
  //   }
  //   return item
  // })
  // }



  // console.log(arrtotree1(array))




const numbertotree=(arr,id=0)=>{
  return arr.filter((item)=>item.parentId==id).map(item=>{
    let child=numbertotree(arr,item.id)
    if(child.length>0){
      item.child=child
    }
    return item
  })
}

console.log(numbertotree(array,0))


const arraytotree=(array,id=0)=>{
    return array.filter(item=>item.parentId==id).map(item=>{
      let child=arraytotree(array,item.id)
      if(child.length>0){
        item.child=child
      }
      return item
    })
}

