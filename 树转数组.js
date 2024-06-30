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

let treeToArr=(tree)=>{
    let res=[]
    res.push({id:tree.id,name:tree.name})
    tree.children.forEach((item)=>{
          res.push(...treeToArr(item))
    })
    return res
}
console.log(treeToArr(tree))
