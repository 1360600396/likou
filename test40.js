var invertTree = function(root) {
  if(root===null) {return null}
  [root.left,root.right] = [root.right,root.left]
  invertTree(root.left)
  invertTree(root.right)
  return root



//   if(root == null){
//     return null
// }
// [root.left,root.right] = [root.right,root.left]
// invertTree(root.left)
// invertTree(root.right)
// return root
};
function node(val,left,right){
  this.val=val?val:0
  
  this.left=left?left:null
  this.right=right?right:null
}
let nod1=new node(0,new node(1),new node(2))
console.log(invertTree(nod1))