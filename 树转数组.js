// 树转数组
const tree = {
  id: 1,
  name: '部门1',
  children: [
    {
      id: 2,
      name: '部门2',
      children: [
        {
          id: 4,
          name: '部门4',
          children: [
            {
              id: 7,
              name: '部门7',
              children: []
            }
          ]
        },
        {
          id: 5,
          name: '部门5',
          children: []
        }
      ]
    },
    {
      id: 3,
      name: '部门3',
      children: [
        {
          id: 6,
          name: '部门6',
          children: []
        }
      ]
    }
  ]
};

// function treeToArray(node) {
//   let result = [];
//   result.push({ id: node.id, name: node.name });
//   node.children.forEach(child => {
//     result = result.concat(treeToArray(child));
//   });
//   return result;
// }

// let resultArray = treeToArray(tree);
// console.log(resultArray);

// let treeToArr=(tree)=>{
//     let res=[]
//     res.push({id:tree.id,name:tree.name})
//     tree.children.forEach((item)=>{
//           res.push(...treeToArr(item))
//     })
//     return res
// }

function treeToArray(node, parent = null) {
  let result = [];
  result.push({ id: node.id, name: node.name, parent });
  node.children.forEach(child => {
    result = result.concat(treeToArray(child, node.id));
  });
  return result;
}

function treeToArray1(node,parentId=0){
  let res=[]
  res.push({id:node.id,name:node.name,parentId})
  node.children.forEach(item=>{
    res=res.concat(treeToArray1(item,node.id))
  })
  return res
}


let resultArray = treeToArray1(tree);
// console.log(resultArray);
// console.log(treeToArray(tree))
// 思路先push一个父元素，然后遍历子元素，递归调用



function treeToArray2(node,parentId=null){
  let res=[]
  res.push({id:node.id,name:node.name,parentId})
  node.children.forEach(item=>{
    res=res.concat(treeToArray2(item,node.id))
  })
  return res
}
console.log(treeToArray2(tree,0))



const treeToArr =(tree,parent=0)=>{
  let res=[]
  res.push({id:tree.id,name:tree.name,parent})
  tree.children.forEach(item=>{
    res=res.concat(treeToArr(tree,item.id))

  })
  return res
}