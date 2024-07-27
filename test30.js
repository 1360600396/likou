function listNode(next,val){
  this.next=next?next:null
  this.val=val?val:0
}
const oddlist=(head)=>{
  if(!head)return null
  if(!head.next) return head
  let odd=head,even=head.next,even1=even
  while(even&&even.next){
    odd.next=odd.next.next
    odd=odd.next
    even.next=even.next.next
    even=even.next
  
  }
  odd.next=even1
  return head
}

const print=(head)=>{
  let n=head
  while(n){
    console.log(n.val)
    n=n.next
  }
}
const reverse =(head)=>{
let prev=null
let cur=head
while(cur){
  let next=cur.next
  cur.next=prev
  prev=cur
  cur=next
}
return prev
}

let n1=new listNode(null,1)
let n2=new listNode(n1,2)
let n3=new listNode(n2,3)
let n4=new listNode(n3,4)




print(reverse(oddlist(n4)))
