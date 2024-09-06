// let arr=[13,2,6]
// function sort1(arr,target){
//   arr.sort((a,b)=>a-b)
//   let i=0,j=arr.length-1
  
//   while(i<=j){
//     let mid=Math.floor((i+j)/2)
//     if(arr[mid]>target){
//       j=mid-1
//     }else if(arr[mid]<target){
//       i=mid+1
//     }else {
//       return mid
//     }
//   }
//   return -1
// }
// console.log(sort1(arr,13))

// function LRU(capcity){
//   this.capcity=capcity
//   this.map=new Map()

// }

// LRU.prototype.get=function(key){
//   if(this.map.has(key)){
//     let value=this.map.get(key)
//     this.map.delete(key)
//     this.map.set(key,value)
//     return value
//   }else{
//     return -1
//   }
// }

// LRU.prototype.set=function(key,value){
//   if(this.map.has(key)){
   
//     this.map.delete(key)
    
//   }else{
//     if(this.capcity===this.map.size){
//       this.map.delete(this.map.keys().next().value)

//     }
//   }
//   this.map.set(key,value)

// }

// let lru=new LRU(4)
// lru.set(1,2)
// lru.set(2,3)
// lru.get(1)
// console.log(lru)

// function fib(n){

//   if(typeof fib[n]!=="undefined"){
//     return fib[n]
//   }
//   if(n==0){
//     return 0
//   }
//   if(n==1||n==2){
//     return 1
//   }
//   let value =fib(n-1)+fib(n-2)
//   fib[n]=value
//   return value
// }

// console.log(fib(3))


// let isvalid=(s)=>{
//   if(!s){
//     return true
//   }
//   let valid={
//     '(': ')',
//     '[': ']',
//     '{': '}'
//   }
//   let res=[]
//   for(let item of s){
    
//     if(valid[item]){
//       res.push(valid[item])
//     }else{
//       if(!res.length||res.pop()!=item){
//         return false
//       }
//     }
//   }
//   return !res.length

// }

// let isvalid1=(s)=>{
//   while(true){
//     let len=s.length
//     s=s.replace('()','').replace('{}','').replace('[]','')
//     if(s.length==len){
//       return len==0
//     }
//   }
 
// }


// let ishui=(s)=>{
//     s=s.replace(/[^a-zA-Z\d]/g,'')
//     let length=s.length
//    let len=Math.floor(s.length/2) 
//     for(let i=0;i<len;i++){
//       if(s[i]!=s[length-i]){
//         return false
//       }
//     }
//     return true
// }

// console.log(ishui('(222)'))



// console.log(isvalid1('(){}'))


// let worddict=function(){
//   this.word={}
// }

// worddict.prototype.addWord=function(word){
//   let len=word.length
//   if(this.word[len]){
//     let value=this.word[len]
//     this.word[len]=[...value,word]

//   }else{
//     this.word[len]=word
//   }
// }

// worddict.prototype.search = function(word) {
//   let len=word.length
//   let flag=word.includes('.')
//   if(flag){
//     let reg=new RegExp(word)
//     return this.word[len].some((item)=>reg.test(item))

//   }else {
//      return this.word[len].includes(word)
//   }
// };


// let reverse=(s)=>{
//  s= s.split('')
// let l=0,r=s.length-1
// for(;l<r;l++,r--){
//   // [s[l],s[r]]=[s[r],s[l]]
//   let temp=s[l]
//   s[l]=s[r]
//   s[r]=temp
// }
// return s.join('')
// }
// console.log(reverse("asd"))

// const myatoi=(s)=>{
//   let num=parseInt(s)
//   let max=Math.pow(2,31)-1
//   let min=-max-1
//   if(num>max){
//     return max
//   }else if(num<min){
//     return min
//   }else{
//     return num
//   }
// }
// console.log(typeof myatoi('123')=='number')

// let a=/\s*([+\-]?\d*).*?/


// let reverse=(s)=>{
//   let flag=Math.sign(s)

//   let s1=Math.abs(s).toString().split('').reverse().join('')
//   s1=parseInt(s1)*flag
//   if (s1 < Math.pow(-2, 31) || s1 > Math.pow(2, 31) - 1) {
//     return 0;
//   }
//   return s1
// }

// console.log(reverse(-321))
// strs = ["flower","flow","flight"]
// let res=''
// let long=(strs)=>{
//   for(let i=0;i<strs[0].length;i++){
//     for(let j=1;j<strs.length;j++){
//       if(strs[0][i]!=strs[j][i]){
//           return res
//       }
      
//     }
//     res+=strs[0][i]
//   }
// }
// console.log(long(strs))


// let compare=(a,b)=>{
//   let arr=a.split('.')
//   let arr1=b.split('.')
//   let max=Math.max(arr.length,arr1.length)
//   for(let i=0;i<max;i++){
    
//     let num1=parseInt(arr[i]?arr[i]:0)
//     let num2=parseInt(arr1[i]?arr1[i]:0)
//     if(num1>num2){
//       return 1
//     }else if(num1==num2){
      
//     }else {
//       return -1
//     }
//   }
//   return 0
// }

// let sort=(arr)=>{
//   return arr.sort((a,b)=>compare(a,b))
// }

// console.log(sort(['1.0', '3.1', '1.01']))


// function ListNode(val,next){
//     this.val=val?val:0
//     this.next=next?next:null
// }

// let odd=(node)=>{
//   if(!node) return null
//   if(!node.next) return node
//   let odd=node,even=node.next,evennode=even
//   while(even!=null&&even.next!=null){
//     odd.next=odd.next.next
//     odd=odd.next
//     even.next=even.next.next
//     even=even.next
//   }
//   odd.next=evennode
//   return node
// }
// let node5 = new ListNode(5)
// let node4 = new ListNode(4, node5)
// let node3 = new ListNode(3, node4)
// let node2 = new ListNode(2, node3)
// let node1 = new ListNode(1, node2)

// console.log(odd(node1))



// function compose(...fn){
//   return function(x){
//     let len=fn.length
//     let res=x
//     for(let i=0;i<len;i++){
//         res=fn[i](res)
//     }
//     return res
//   }
// }

// function instanceOf1(obj,fun){
//   if(!obj&&!['object','function'].includes (typeof obj) ){
//     return false
//   }
//   let newobj=Object.getPrototypeOf(obj)
//   if(newobj==fun.prototype){
//     return true
//   }else if(newobj==null){
//       return false
//   }else{
//     return instanceOf1(newobj,fun)
//   }
// }

// console.log(instanceOf1([],Array))

let a=[1,[2,3]]
// function flat(arr){
//   return arr.reduce((prev,cur)=>{
//     return prev=prev.concat(Array.isArray(cur)?flat(cur):cur)
//   },[])
// }
// function flat(arr){
//   let res=[]
//   arr.forEach((item)=>{
//     if(Array.isArray(item)){
//       res.push(...flat(item))
//     }else{
//       res.push(item)
//     }
//   })
//   return res
// }
// function treetoarr(tree,parentid=0){
//   let res=[]
//   res.push({id:tree.id,name:tree.name,parentid})
//   tree.child.forEach((item)=>{
//     res.push(...treetoarr(item,tree.id))
//   })
//   return res
// }

// function arrtotree(arr,id=0){
//   return arr.filter((item)=>item.parent==id).map((item)=>{
//       let child=arrtotree(arr,item.id)
//       if(child.length>0){
//         item.child=child
//       }
//       return item
//   })
// }


// console.log(flat(a))
// let siminter=(fn,time)=>{
//     let timer=null
//     function timer1(){
//       setTimeout(()=>{
//         fn()
//         timer1()
//       },time)
//     }
//     timer1()
// }
// siminter(()=>{
//   console.log("123")
// },1000)


// let settime=(fn,time)=>{
//   let timer=null
//   timer=setInterval(()=>{
//     fn()
// clearInterval(timer)
//   },time)
// }


// settime(()=>{
//   console.log("123")
// },123)


// Function.prototype.mycall=function(obj,args){
//     let flag=Symbol()
//      obj[flag]=this
//      let res=obj[flag](...args)
//      delete obj[flag]
//      return res
// }

// let obj={
//   name:1
// }
// function try1(age){
//  console.log(this.name,age)
// }

// try1.apply(obj,[23])

// Function.prototype.bind=function(obj,...args){

//   return (arges2)=>{
//     this.call(obj,...args,args)
//   }
// }
// Promise.reject("123").then((res)=>{console.log(res)},(rj)=>{console.log(rj)})
// Promise.myall=function(arr){
//   return new Promise((resolve,reject)=>{
//     if(!arr.length)return reject([])
//     let arr1=[]
//     let len=arr.length
//     let count=0
//     arr.forEach((item,index)=>{
//       Promise.resolve(item).then((res)=>{
//           arr1[index]=res
//           count++
//         if(count==len){
//           resolve(res)
//         }
//       }).catch((res)=>{
//           reject(res)
//       })
      
//     }) 
//   })
// }

// let p1=new Promise((resolve,rej)=>{
//   resolve("123")
// })
// let p2=new Promise((resolve,rej)=>{
//   resolve("345")
// })
// let ab=[p1,p2]

// console.log(Promise.all(ab))
// Promise.myrace=function(arr){
//  return new Promise((resolve,reject)=>{
//   let len=arr.length
//   arr.forEach((item)=>{
//     Promise.resolve(item).then(resolve()).catch(reject())
//   })
//  })
// }


// const PENDING = 'pending'
// const FULFILLED = 'fulfilled'
// const REJECTED = 'rejected'

// class Promise{
//   state='pending'
//   value=undefined
//   constructor(executor){
//     let resolve=(value)=>{
//       this.$change(FULFILLED,value)
//     }
//     let reject=(value)=>{
//       this.$change(REJECTED,value)
//     }
//     executor(resolve,reject)
//   }
//   #change(state,value){
//     if(this.state!='pending'){
//       return 
//     }
//     this.state=state
//     this.value=value
//   }

//   then(resfun,rejfun){
//     resfun=typeof resfun=='function'?resfun:value
//     rejfun=typeof rejfun=='function'?rejfun:value
//     if(this.state==FULFILLED){
//       resfun(value)
//     }else if(this.state==REJECTED){
//       rejfun(value)
//     }

//   }
//   static resolve(value){
//     if(value instanceof Promise){
//       return value
//     }
//     return new Promise((resolve)=>{
//       resolve(value)
//     })
//   }

//   static reject(value){
    
//     return new Promise((resolve,reject)=>{
//       reject(value)
//     })
//   }
// }

// function replace1(s){
//   return  s.replace(/^\s+(.*?)\s+$/g,'$1')
// }
// function replace2(s){
//   return s.replace(/^\s+|\s+$/g,'')

// }

// console.log(replace2("   sda   "))


// let replace3=(s)=>{
//   return String(s).replace(/(?=(\d{4})+$)/g,'-')
// } 

// console.log(replace3(13177629720))

// function mynew(constructor,...arge){
//   let obj={}
//   Object.setPrototypeOf(obj,constructor.prototype)
//   let res=constructor.apply(obj,...arge)
//   return  typeof res =='object'?res:{}

// }

// function clone(obj){
//   typeof obj=='object'?{}:[]
//   let newobj={

//   }
//   for(let k in obj){
//     if(typeof obj[k]=='object'){
//       newobj[k]=clone(obj[k])
//     }else{
//       newobj[k]=obj[k]
//     }
//   }
//   return newobj
// }

// let qianfen=(s)=>{
//      let [a,b]= s.split('.')
//      a.replace(/\B(?=(\d{3})+$)/g,',')
//      a==''
// }


// function create(obj,props){
//   if(!(['object','function'].includes(typeof obj))){
//     return "cuowu"
//   }
//     function constructor(){
//     }
//     constructor.prototype=obj
//     let obj1=new constructor()
//     return obj1
//     if(props){
//       Object.defineProperties(obj1,props)
//     }
//     if(obj===null){
//       obj1._proto_=obj
//     }
//       return obj1
// }

// let jsonstring=(data)=>{
//   if(data=null){
//     return 'null'
//   }
//   if(typeof data=='number'||typeof data=='boolean'){
//     return String(data)
//   }
//   if(Array.isArray(data)){
//     let arr=data.map((item)=>jsonstring(item))
//     return `[${arr.join(',')}]`
//   }
//   if(typeof data=='object'){
//     let arr=Object.keys
//     let arr1=arr.map((item)=>{
//       let value=jsonstring(data[item])
//       return `${item}`+`${value}`
//     })
//     return arr1.join(',')
//   }
// }

// class Scheduler {
//   constructor(){
//       this.queue=[]
//       this.maxcount=2
//       this.runcount=0
//   }
//   run(){
//       if(this.queue.length&&this.runcount<this.maxcount){
//         let queue=this.queue.shift()
//         this.runcount++
//         queue().then(()=>{
//           this.runcount--
//           this.run()
//         })
//       }
//   }
//   add(Promise){
//     this.queue.push(Promise)
//     this.run()
//   }


// }
// let Scheduler=new Scheduler()
// function protime(time){
//   return Promise((resolve,reject)=>{
//     setTimeout(resolve,time)
//   })
// }

// function addtask(time,order){
//  Scheduler.add(()=>{protime(time).then((order)=>console.log(order))})
// }


// let getPrototype=(s)=>{
//   let s1=Object.prototype.toString.call(s)
//  return  s1.replace(/\[object (.*?)\]/,'$1').toLowerCase()
// }
// console.log(getPrototype(123))


// class EventEmitter {
//   constructor(){
//     this.obj={}
  
//   }
//   on(event,fun){
//     if(!this.obj[event]){
//       this.obj[event]=[]
//     }
//     this.obj[event].push(fun)
//   }
//   once(event,fun){
//     let fun1=()=>{
//       fun()
//       this.delete(event,fun1)
//     }
//     this.on(event,fun1)

//   }
//  delete(event,fun){
//   if(typeof event=='undefined'){
//     delete this.obj
//   }else if(typeof evt=='string'){
//     if(typeof fun=='function'){
//       this.event[event]=this.event[event].filter((item)=>item!=fun)
//     }else{
//       delete this.obj[event]
//     }
//   }else{
//       delete this.obj[event]
//   }
//   }
  
// }

// function debounce(time,fn){
//   let timer=null
//   return function(){
//     if(timer){
//       clearTimeout(timer)
//     }
//     timer=setTimeout(()=>{
//       fn()
//     },time)
//   }
// }


// function throtten(time,fn){
//   let timer=null
//   return function(){
//     if(!timer){
//       timer=setTimeout(()=>{
//         fn()
//         clearTimeout(timer)
//       },time)
//     }
//   }
// }

// let arr=[]
// function currysum(...args){
//     arr.push(...args)
//     if(arr.length>=5){
//      return  arr.reduce((prev,cur)=>prev+cur,0)
//     }else{
//       return currysum
//     }
// }


// function currysumlen(len){
//   let arr=[]
//   function currysum(...args){
//       arr.push(...args)
//       if(arr.length>=len){
//        return  arr.reduce((prev,cur)=>prev+cur,0)
//       }else{
//         return currysum
//       }
//   }
//   return arr
// }

// const template = 'Hello, {{ name }}! Welcome to {{ place }}.';
// const data = { name: 'John', place: 'Wonderland' };
// let render=(template,data)=>{
//  return template.replace(/{{\s*?(\w+)\s*?}}/g,(match,key)=>{
//     return key&&data[key]?data[key]:''
//  })
// }
// console.log(render(template,data))


// let fun=(str)=>{
//   return ()=>{
//     console.log("123")
//     return str
//   }
// }
// let sleep=(time,str)=>{
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve(fun(str)())
//     },time)
//   })
// }


// async function fun2(){
//   let res=await sleep(2000,'zxb')
//   console.log(res)
// }
// fun2()

// function findcommon2(node1,node2){
//   if(node1.contains(node2)){
//     return node1
//   }else if(node2.contains(node1)){
//     return node2
//   }else{
//     return findcommon1(node1.parentnode,node2)
//   }
// }

// function findcommon1(node1,node2){
  
//   while(!node1.contains(node2)){
//     node1=node1.parentnode
//   }
//   return node1

// }



// let storage={
//   prefix: 'fatFish',
//   timeSign: '|fatFish|',
//   setitem(key,value,time){
//     key=`${this.prefix}${key}`
//     time=time?new Date(time).getTime:Date.now()+ 24 * 60 * 60 * 31 * 1000
//     window.localStorage.setItem(key,`${time}${this.timeSign}${JSON.stringify(value)}`)

//   },
//   getitem (key){
//     key = `${this.prefix}${key}`
//     let value = window.localStorage.getItem(key)
//     if(value){
//      let index= value.indexOf(this.timeSign)
//       let time =+value.slice(0,index)
//         if(time>Date.now()){
//           window.localStorage.getItem(key)
//         }else{
//           value=null
//           window.localStorage.remove(key)
//         }
//     }
//   }
// }
// console.log(storage.prefix)


// Array.prototype.map1=function(fun){
//   if(typeof fun!='function'){
//     throw ('error')
//   }
//   return this.reduce((prev,cur,index)=>{
//     return prev.concat(fun(cur))
//   },[])
// }

// let arr=[1,2,3]

//  arr=arr.map1((item)=>{return item*2})
//  console.log(arr)


// let count = 1;
//  let promiseFunction = () =>
//    new Promise(rs =>
//    setTimeout(() => {
//        rs(count++);
//      },1000)
//    );
//  let firstFn = firstPromise(promiseFunction);



//  firstFn().then((res)=>console.log(res)); // 1
// //  firstFn().then(console.log); // 1
// //  firstFn().then(console.log); // 1

// function firstPromise(promise){
//   let p=null
//   return function(){
//     return p?p:(p=promise())
//   }
// }
// let swap=(arr,value,j)=>{
//   [arr[value],arr[j]]=[arr[j],arr[value]]
// }


// let selectsort=(arr)=>{
//   let len=arr.length
//   let value
//   for(let i=0;i<len;i++){
//     let  value=i
//     for(let j=i+1;j<len;j++){
//       if(arr[j]<arr[value]){
//         value=j
//       }
//     }
//     if(value!=i){
//       swap(arr,value,i)
//     }
//   }
//   return arr
// }

// console.log(selectsort([2,1,3]))

// let sertsort=(arr)=>{
//   let len=arr.length
//   for(let i=1;i<len;i++){
//     let j=i-1
//     value=arr[i]
//     while(j>=0&&arr[j]>value){
//       arr[j+1]=arr[j]
//       j--
//     }
//     arr[j+1]=value
//   }
//   return arr
// }
// console.log(sertsort([2,1,3]))



// let a1=new Promise((resolve)=>{
//   resolve("123")
// })

// let a2=new Promise((resolve,reject)=>{
//   reject("2234")
// })

// let arr=[a1,a2]

// console.log(Promise.allSettled(arr))


// var addTwoNumbers = function(l1, l2) {
//   let head = null, tail = null;
//   let carry = 0;
//   while (l1 || l2) {
//       const n1 = l1 ? l1.val : 0;
//       const n2 = l2 ? l2.val : 0;
//       const sum = n1 + n2 + carry;
//       if (!head) {
//           head = tail = new ListNode(sum % 10);
//       } else {
//           tail.next = new ListNode(sum % 10);
//           tail = tail.next;
//       }
//       carry = Math.floor(sum / 10);
//       if (l1) {
//           l1 = l1.next;
//       }
//       if (l2) {
//           l2 = l2.next;
//       }
//   }
//   if (carry > 0) {
//       tail.next = new ListNode(carry);
//   }
//   return head;
// };


/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(str) {
//   if (str.length <= 1) {return str.length}
//     let left = 0
//     let right = 1
//     let max = 0
//     let temp
//     while(right<str.length){
//       temp = str.slice(left, right)
//       if (temp.indexOf(str.charAt(right)) > -1) {
//         left++
//         continue
//       } else {
//         right++
//       }
//       if (right - left > max) { max = right - left }
//     }
//     return max
// };

// /**
// //  * @param {number[]} nums1
// //  * @param {number[]} nums2
// //  * @return {number}
// //  */
// var findMedianSortedArrays = function(nums1, nums2) {
//   let num3=[...nums1,...nums2].sort((a,b)=>a-b)
//   let n1,n2
//   if ((num3.length)%2==0){
//       n1=num3.length/2-1
//       n2=n1+1
//       return (num3[n1]+num3[n2])/2
//   }else{
//       n1=parseInt(num3.length/2)
//       return num3[n1]
//   }
  
//   };
/**
/**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function(s) {
//   let max = ''

//   for(let i=0; i< s.length; i++) {
//       // 分奇偶， 一次遍历，每个字符位置都可能存在奇数或偶数回文
//       helper(i, i)
//       helper(i, i+1)
//   }

//   function helper(l, r) {
//       // 定义左右双指针
//       while(l>=0 && r< s.length && s[l] === s[r]) {
//           l--
//           r++
//       }
//       // 拿到回文字符， 注意 上面while满足条件后多执行了一次，所以需要l+1, r+1-1
//       const maxStr = s.slice(l + 1, r + 1 - 1);
//       // 取最大长度的回文字符
//       if (maxStr.length > max.length) max = maxStr
//   }
//   return max
// };

// /**
//  * @param {string} s
//  * @param {string} p
//  * @return {boolean}
//  */
// var maxArea = function(height) {
//   let res = 0
//   for (let i = 0, j = height.length - 1; i < j; ) {
//       res = Math.max(res, Math.min(height[i], height[j]) * (j - i))
//       height[i] < height[j] ? i++ : j--
//   }
//   return res
// };


// /**
//  * @param {string} digits
//  * @return {string[]}
//  */
// var letterCombinations = function(digits) {
//   let map = {  //电话数字到字母的映射
//        '0':'',
//        '1':'',
//       '2': 'abc',
//       '3': 'def',
//       '4': 'ghi',
//       '5': 'jkl',
//       '6': 'mno',
//       '7': 'pqrs',
//       '8': 'tuv',
//       '9': 'wxyz'
//   };
//   let s=[]
//   let res=[]
//   function backtrack(digits,index){
//           if(digits=='')return []
//           if(index==digits.length){
//               res.push(s.join(''))
//               return 
//           }
//           let s1=map[digits[index]]

//           for(let i=0;i<s1.length;i++){
//               s.push(s1[i])
//               backtrack(digits,index+1)
//               s.pop()
//           }
//   }
//   backtrack(digits,0)
//   return res
// };


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
//  * @param {ListNode[]} lists
//  * @return {ListNode}
//  */
// var mergeKLists = function(lists) {
//     function transform(l, arr) {
//         while(l) {
//             arr.push(l.val);
//             l = l.next;
//         }
//     }

//     let arr = [];
//     let res = new ListNode(null);

//     lists.map(item => transform(item, arr));
//     arr.sort((a, b) => a - b);
//     for (let i = arr.length - 1; i >= 0; i--) {
//         let temp = new ListNode(null);
//         res.val = arr[i];
//         temp.next = res;
//         res = temp;
//     }

//     return res.next;
// };

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
//  * @param {ListNode[]} lists
//  * @return {ListNode}
//  */
// var mergeKLists = function(lists) {
//     function transform(l, arr) {
//         while(l) {
//             arr.push(l.val);
//             l = l.next;
//         }
//     }

//     let arr = [];
//     let res = new ListNode(null);

//     lists.map(item => transform(item, arr));
//     arr.sort((a, b) => a - b);
//     for (let i = arr.length - 1; i >= 0; i--) {
//         let temp = new ListNode(null);
//         res.val = arr[i];
//         temp.next = res;
//         res = temp;
//     }

//     return res.next;
// };

// var nextPermutation = function(nums) {
//     let num1=[...nums]
//     nums.sort((a,b)=>a-b)
//     let res=[]
//      let path=[]
//      let used=[]
//       function back(nums,used){
//          if(res.length==nums.length){
//              path.push([...res])
//              return 
//          }
//          for(let i=0;i<nums.length;i++){
//              if(used[i]==true)continue
//              used[i]=true
//              res.push(nums[i])           
//              back(nums,used)
//              res.pop()
//              used[i]=false
 
//          }
//       }
//       back(nums,used)
//     //   let index =path.findIndex((item)=>{
//     //     let[a,b,c]=item
//     //     let [a1,b1,c1]=num1
//     //     if(a1==a&&b1==b&&c1==c){
//     //         return true
//     //     }
//     //   })
//     //   return path[index+1]
//     return path
//  };

// let arr=[1,2,3]

//  console.log( nextPermutation(arr))


//  var longestValidParentheses = function(s) {
//     let max = 0
//     if (s.length < 1) return max

//     let len = s.length

//     // 栈顶之所有加入一个-1,纯粹是为了方便计算有效括号的长度
//     // 不然就需要手动调整为i-j+1;同时而确保第一个字符为")"时不需要特殊处理
//     let stack = [-1]

//     for(let i = 0; i < len; i++) {
//         let value = s[i]
//         if (value === '(') {
//         stack.push(i)
//         } else if (value === ')') {
//         stack.pop()


//         // 栈顶加入一个pivot字符")",实际上是方便计算有效括号串长度
//         if (stack.length < 1) {
//             stack.push(i)
//         } else {
//             max = Math.max(max, i - stack[stack.length - 1])
//         }
//         }
//     }
//  }

//  var search = function(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         // 如果中间值就是目标值，直接返回索引
//         if (nums[mid] === target) return mid;

//         // 判断左半部分是否有序
//         if (nums[left] <= nums[mid]) {
//             // 如果目标值在左半部分的范围内，调整右边界
//             if (nums[left] <= target && target < nums[mid]) {
//                 right = mid - 1;
//             } else {
//                 // 否则调整左边界
//                 left = mid + 1;
//             }
//         } else {
//             // 如果右半部分有序
//             // 如果目标值在右半部分的范围内，调整左边界
//             if (nums[mid] < target && target <= nums[right]) {
//                 left = mid + 1;
//             } else {
//                 // 否则调整右边界
//                 right = mid - 1;
//             }
//         }
//     }

//     // 如果未找到目标值，返回 -1
//     return -1;
// };
// var searchRange = function(nums, target) {
//     // 查找左边界
//     const findLeft = (nums, target) => {
//         let left = 0;
//         let right = nums.length - 1;
//         while (left <= right) {
//             let mid = Math.floor((left + right) / 2);
//             if (nums[mid] < target) {
//                 left = mid + 1;
//             } else {
//                 right = mid - 1;
//             }
//         }
//         return left;
//     };
    
//     // 查找右边界
//     const findRight = (nums, target) => {
//         let left = 0;
//         let right = nums.length - 1;
//         while (left <= right) {
//             let mid = Math.floor((left + right) / 2);
//             if (nums[mid] <=target) {
//                 left = mid + 1;
//             } else {
//                 right = mid - 1;
//             }
//         }
//         return right;
//     };
    
//     const leftIndex = findLeft(nums, target);
//     const rightIndex = findRight(nums, target);

//     // 检查目标值是否存在于数组中
//     if (leftIndex <= rightIndex && nums[leftIndex] === target && nums[rightIndex] === target) {
//         return [leftIndex, rightIndex];
//     } else {
//         return [-1, -1];
//     }
// };


// let search=(arr,target)=>{
//     let left=0
//     let right=arr.length-1
//     while(left<right){
//         let mid=Math.floor((left+right)/2) 
//         if(target>arr[mid]){
//             left=mid+1
//         } else if(target<arr[mid]) {
//             right=mid-1
//         }else{
//             return mid
//         }
   
// }
// return -1
// }
/**
//  * @param {number[][]} matrix
//  * @return {void} Do not return anything, modify matrix in-place instead.
//  */
// var rotate = function(matrix) {
//     const n = matrix.length;
//     //水平中轴线翻转
//     for (let i = 0; i < Math.floor(n / 2); i++) {
//         for (let j = 0; j < n; j++) {
//             [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]];
//         }
//     }
//     //主对角线翻转
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < i; j++) {
//             [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//         }
//     }
// };

// var rotate = function(matrix) {
//     const n = matrix.length;
//     const matrix_new = new Array(n).fill(0).map(() => new Array(n).fill(0));
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             matrix_new[j][n - i - 1] = matrix[i][j];
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             matrix[i][j] = matrix_new[i][j];
//         }
//     }
// };

// var groupAnagrams = function(strs) {
//     var res = [];
//     var map = new Map();
//     for(var i=0;i<strs.length;i++){
//         var k = strs[i].split('').sort().join('');
//         if(map.has(k)){
//             map.get(k).push(strs[i]);
//         }else{
//             map.set(k, [strs[i]]);    
//         }
//     }
//     map.forEach((val, key)=>{
//         res.push(val);
//     })
//     return res;
    
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//     let ans = nums[0];
//     let sum = 0;
//     for(const num of nums) {
//         if(sum > 0) {
//             sum += num;
//         } else {
//             sum = num;
//         }
//         ans = Math.max(ans, sum);
//     }
//     return ans;
// };
// var canJump = function (nums) {
//     // 长度为 1 直接就是终点
//     if (nums.length === 1) return true;

//     // 能覆盖的最远距离
//     let cover = 0;
//     for (let i = 0; i <= cover; i++) {
//         // 当前覆盖距离 cover 和当前位置加能跳跃的距离中取一个较大者
//         cover = Math.max(cover, i + nums[i]);

//         // 覆盖距离超过或等于 nums.length - 1 说明能到达终点
//         if (cover >= nums.length - 1) return true;
//     }

//     // 循环完成之后，还没返回 true 就是不能达到终点
//     return false;
// };

// var merge = function(intervals) {
//     intervals.sort((p, q) => p[0] - q[0]); // 按照左端点从小到大排序
//     const ans = [];
//     for (const p of intervals) {
//         const m = ans.length;
//         if (m && p[0] <= ans[m - 1][1]) { // 可以合并
//             ans[m - 1][1] = Math.max(ans[m - 1][1], p[1]); // 更新右端点最大值
//         } else { // 不相交，无法合并
//             ans.push(p); // 新的合并区间
//         }
//     }
//     return ans;
// };
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function(m, n) {
//     const f = new Array(m).fill(0).map(() => new Array(n).fill(0));
//     for (let i = 0; i < m; i++) {
//         f[i][0] = 1;
//     }
//     for (let j = 0; j < n; j++) {
//         f[0][j] = 1;
//     }
//     for (let i = 1; i < m; i++) {
//         for (let j = 1; j < n; j++) {
//             f[i][j] = f[i - 1][j] + f[i][j - 1];
//         }
//     }
//     return f[m - 1][n - 1];
// };





/**
 * @param {number[][]} grid
 * @return {number}
 */
// var minPathSum = function(dp) {
//     let row = dp.length, col = dp[0].length

//     for(let i = 1; i < row; i++)//初始化第一列
//         dp[i][0] += dp[i - 1][0]

//     for(let j = 1; j < col; j++)//初始化第一行
//         dp[0][j] += dp[0][j - 1]

//     for(let i = 1; i < row; i++)
//         for(let j = 1; j < col; j++)
//             dp[i][j] += Math.min(dp[i - 1][j], dp[i][j - 1])//取上面和左边最小的
    
//     return dp[row - 1][col - 1]
// };


// const minDistance = (word1, word2) => {
//     let dp = Array.from(Array(word1.length + 1), () => Array(word2.length+1).fill(0));

//     for(let i = 1; i <= word1.length; i++) {
//         dp[i][0] = i; 
//     }

//     for(let j = 1; j <= word2.length; j++) {
//         dp[0][j] = j;
//     }

//     for(let i = 1; i <= word1.length; i++) {
//         for(let j = 1; j <= word2.length; j++) {
//             if(word1[i-1] === word2[j-1]) {
//                 dp[i][j] = dp[i-1][j-1];
//             } else {
//                 dp[i][j] = Math.min(dp[i-1][j] + 1, dp[i][j-1] + 1, dp[i-1][j-1] + 1);
//             }
//         }
//     }
    
//     return dp[word1.length][word2.length];
// };


/**
 * @param {string} s
 * @return {number}
 */

// const countSubstrings = (s) => {
//     const strLen = s.length;
//     let numOfPalindromicStr = 0;

//     for(let i = 0; i < 2 * strLen - 1; i++) {
//         let left = Math.floor(i/2);
//         let right = left + i % 2;

//         while(left >= 0 && right < strLen && s[left] === s[right]){
//             numOfPalindromicStr++;
//             left--;
//             right++;
//         }
//     }

//     return numOfPalindromicStr;
// }



// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findUnsortedSubarray = function(nums) {
    

//     const sortedNums = [...nums].sort((a, b) => a - b)
//     let left = 0, right = nums.length - 1
    
//     while(nums[left] === sortedNums[left]) {
//         left ++
//     }

//     while(nums[right] === sortedNums[right]) {
//         right --
//     }

//     return right - left + 1
// };


// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var findTargetSumWays = function(nums, target) {
//     let count = 0;
//     const backtrack = (nums, target, index, sum) => {
//         if (index === nums.length) {
//             if (sum === target) {
//                 count++;
//             }
//         } else {
//             backtrack(nums, target, index + 1, sum + nums[index]);
//             backtrack(nums, target, index + 1, sum - nums[index]);
//         }
//     }
    
//     backtrack(nums, target, 0, 0);
//     return count;
// };
// function isAnagram(s, t) {
//     const countS = new Array(26).fill(0)
//     const countT = new Array(26).fill(0)
//     for (let i = 0; i < s.length; i++) {
//         ++countS[s[i].charCodeAt() - 'a'.charCodeAt()]
//         ++countT[t[i].charCodeAt() - 'a'.charCodeAt()]
//     }
//     console.log(countS.toString())
//     return countS.toString() === countT.toString()
// }
// var findAnagrams = function (s, p) {
//     let left = 0
//     let right = p.length - 1
//     let res = []
//     while(right < s.length) {
//         if (isAnagram(s.substring(left, right + 1), p)) {
//             res.push(left)
//         }
//         left++
//         right++
//     }
//     return res
// };
// let  s = "cbaebabacd", p = "abc"
// findAnagrams(s,p)

// var pathSum = function(root, targetSum) {
//     if (root == null) {
//         return 0;
//     }
    
//     let ret = rootSum(root, targetSum);
//     ret += pathSum(root.left, targetSum);
//     ret += pathSum(root.right, targetSum);
//     return ret;
// };

// const rootSum = (root, targetSum) => {
//     let ret = 0;

//     if (root == null) {
//         return 0;
//     }
//     const val = root.val;
//     if (val === targetSum) {
//         ret++;
//     } 

//     ret += rootSum(root.left, targetSum - val);
//     ret += rootSum(root.right, targetSum - val);
//     return ret;
// }


// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var canPartition = function(nums) {
//     const sum = (nums.reduce((p, v) => p + v));
//     if (sum & 1) return false;
//     const dp =new  Array(sum / 2 + 1).fill(0);
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = sum / 2; j >= nums[i]; j--) {
//             dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
//             if (dp[j] === sum / 2) {
//                 return true;
//             }
//         }
//     }
//     return dp[sum / 2] === sum / 2;
// };



// function reconstructQueue(people) {
//     people.sort((a, b) => {
//       if (b[0] == a[0]) {
//         return  a[1] - b[1];//身高一样，按k小的在前面
//       }
//       return b[0] - a[0];
//     }); //按身高降序排列
  
//     let res = [];
//     for (let i = 0; i < people.length; i++) {
//       const h = people[i][0];
//       const k = people[i][1];
//       res.splice(k, 0, [h, k]); //在第k位插入[h,k]
//     }
//     return res;
//   }
  

// var decodeString = function(s) {
//     let reg = /(\d+)\[([a-zA-Z]+)\]/g;
//     while(s.indexOf('[')>0){
//         s = s.replace(reg,(_,...[num,str])=>{
//             let result = "";
//             for(let i=0;i<num-0;i++){
//                 result += str;
//             }
//             return result;
//         });
//     }
//     return s;
// };

// function countBits(n: number): number[] {
//     let res = []

//     if(n === 0) return [0]
 
//     while(n){
//         let binary = Number(n).toString(2), sum = 0

//         for(let item of binary){
//             sum += +item
//         }

//         res.unshift(sum)
//         n--
//     }
    
//     res.unshift(0)

//     return res
// };


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var rob = function(root) {
//     let res = dfs(root);
//     return Math.max(res[0], res[1]);
// };

// function dfs(root) {
//     // res[0]表示不包括根节点的最大值，res[1]为包含根节点的最大值
//     let res = [0,0];
//     if (root === null) return res;
//     let left = dfs(root.left);
//     let right = dfs(root.right);
//     // 不包含根节点的最大值为左子树最大值加右子树最大值
//     res[0] = Math.max(...left) + Math.max(...right);
//     // 包含根节点的最大值为当前节点值加左子树包含根节点的值加右子树包含根节点的值
//     res[1] = root.val + left[0] + right[0];
//     return res;
// }

// var rob = function(root) {
//     let res = dfs(root);
//     return Math.max(res[0], res[1]);
// };

// function dfs(root) {
//     // res[0]表示不包括根节点的最大值，res[1]为包含根节点的最大值
//     let res = [0,0];
//     if (root === null) return res;
//     let left = dfs(root.left);
//     let right = dfs(root.right);
//     // 不包含根节点的最大值为左子树最大值加右子树最大值
//     res[0] = Math.max(...left) + Math.max(...right);
//     // 包含根节点的最大值为当前节点值加左子树包含根节点的值加右子树包含根节点的值
//     res[1] = root.val + left[0] + right[0];
//     return res;
// }



// var lengthOfLIS = function(nums, dp = [1]) {
//     for (let i = 1; i < nums.length; i++){
//         dp[i] = 1
//         for (let j = 0; j < i; j++) {
//             nums[i] > nums[j] && (dp[i] = Math.max(dp[i], dp[j] + 1))
//         }
//     }
//     return Math.max(...dp)
// }

// var maxProfit = function(prices) {
//     let n = prices.length;
//     let r1 = -prices[0];
//     let r2 = 0;
//     let r3 = 0;
//     for(let i = 1; i < n; i++) {
//         let newR1 = Math.max(r1, r3 - prices[i]);
//         let newR2 = r1 + prices[i];
//         let newR3 = Math.max(r3, r2);
//         r1 = newR1;
//         r2 = newR2;
//         r3 = newR3;
//     }
//     return Math.max(r3, r2);
// };

// var numSquares1 = function(n) {
//     let dp = new Array(n + 1).fill(Infinity)
//     dp[0] = 0

//     for(let i = 1; i**2 <= n; i++) {
//         let val = i**2
//         for(let j = val; j <= n; j++) {
//             dp[j] = Math.min(dp[j], dp[j - val] + 1)
//         }
//     }
//     return dp[n]
// };

// let res=[];
// //1. 确定递归函数 函数参数
// const getPath=function(node,curPath){
//  //2. 确定终止条件，到叶子节点就终止
//     if(node.left===null&&node.right===null){
//         curPath+=node.val;
//         res.push(curPath);
//         return ;
//     }
//     //3. 确定单层递归逻辑
//     curPath+=node.val+'->';
//     node.left&&getPath(node.left,curPath);
//     node.right&&getPath(node.right,curPath);
// }
// getPath(root,'');
// return res;

// console.log('123'=='321')

// /**
//  * @param {number[][]} matrix
//  * @param {number} target
//  * @return {boolean}
//  */
// /**
//  * @param {number[][]} matrix
//  * @param {number} target
//  * @return {boolean}
//  */
// var searchMatrix = function(matrix, target) {
//     const m = matrix.length, n = matrix[0].length;
//     for(let i=m-1,j=0;i>=0&&j<n;){
//         if(matrix[i][j] == target)
//             return true;
//         else if(matrix[i][j] < target)
//             j += 1;
//         else
//             i -= 1;
//     }
//     return false;
// };


// var lowestCommonAncestor = function(root, p, q) {
//     if (root == q || root == p || root == null) return root;
//       let left = lowestCommonAncestor(root.left, p, q);
//      let right = lowestCommonAncestor(root.right, p, q);
//       if (left != null && right != null) return root;
//       if (left == null) return right;
//       return left;
// };

// var invertTree = function(root) {
//     if(root == null){
//         return null
//     }
//     [[root.left,root.right]] = [[root.right,root.left]]
//     invertTree(root.left)
//     invertTree(root.right)
//     return root
// };

// var maximalSquare = function (matrix) {
//     let max_len = 0;
//     let dp = Array.from(Array(matrix.length), () => Array(matrix[0].length).fill(0));
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (matrix[i][j] === '1') {
//                 if (i === 0 || j === 0) {
//                     dp[i][j] = 1;
//                 } else {
//                     dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
//                 }
//                 max_len = Math.max(max_len, dp[i][j]);
//             }
//         }
//     }
//     return max_len ** 2;
// };

// /**
//  * @param {number} k
//  * @param {number} n
//  * @return {number[][]}
//  */
// var combinationSum3 = function(k, n) {
//     let res = [];
//     let path = [];
//     let sum = 0;
//     const dfs = (path,index) => {
//         // 剪枝操作
//         if (sum > n){
//             return 
//         }
//         if (path.length == k) {
//             if(sum == n){
//                 res.push([...path]);
//                 return 
//             }
//         }
//         for (let i = index; i <= 9 - (k-path.length) + 1;i++) {
//             path.push(i);
//             sum = sum + i;
//             index += 1;
//             dfs(path,index);
//             sum -= i
//             path.pop()
//         }
//     }
//     dfs(path,1);
//     return res
// };


// var combinationSum3 = function(k, n) {
//     let res=[]
//     let path=[]
//     let sum=0
//     function dfs(path,index){
//         if(sum>n)return
//         if(path.length==k){
            
//             if(sum==n){
//                 res.push([...path])
//                 return 
//             }
//         }
//         for(let i=index;i<9-(k-path.length);i++){
//             path.push(i)
//             index++
//             sum+=i
//             dfs(path,index)
//             sum-=i
//             path.pop()
//         }
//     }
//     dfs(path,1)
//     return res
// };



// class Trie {
//     constructor() {
//         this.root = {}; // 使用对象来表示节点
//         this.END_OF_WORD = '#'; // 标记单词结束
//     }

//     /**
//      * @param {string} word
//      * @return {void}
//      */
//     insert(word) {
//         let node = this.root;
//         for (const char of word) {
//             if (!node[char]) {
//                 node[char] = {}; // 创建新的节点
//             }
//             node = node[char];
//         }
//         node[this.END_OF_WORD] = true; // 标记单词的结尾
//     }

//     /**
//      * @param {string} word
//      * @return {boolean}
//      */
//     search(word) {
//         let node = this.root;
//         for (const char of word) {
//             if (!node[char]) {
//                 return false; // 单词不存在
//             }
//             node = node[char];
//         }
//         return !!node[this.END_OF_WORD]; // 检查是否是一个单词的结尾
//     }

//     /**
//      * @param {string} prefix
//      * @return {boolean}
//      */
//     startsWith(prefix) {
//         let node = this.root;
//         for (const char of prefix) {
//             if (!node[char]) {
//                 return false; // 前缀不存在
//             }
//             node = node[char];
//         }
//         return true; // 前缀存在
//     }
// }


// const numIslands = (grid) => {
//     let count = 0
//     for (let i = 0; i < grid.length; i++) {
//       for (let j = 0; j < grid[0].length; j++) {
//         if (grid[i][j] === '1') {
//           count++
//           turnZero(i, j, grid)
//         }
//       }
//     }
//     return count
//   }
//   function turnZero(i, j, grid) {
//     if (i < 0 || i >= grid.length || j < 0 
//          || j >= grid[0].length || grid[i][j] === '0') return
//     grid[i][j] = '0'
//     turnZero(i, j + 1, grid)
//     turnZero(i, j - 1, grid)
//     turnZero(i + 1, j, grid)
//     turnZero(i - 1, j, grid)
//   }


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var rob = function(nums) {
//     const len = nums.length;
//     if(len == 0)
//         return 0;
//     const dp = new Array(len + 1);
//     dp[0] = 0;
//     dp[1] = nums[0];
//     for(let i = 2; i <= len; i++) {
//         dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i-1]);
//     }
//     return dp[len];
// };


// var getIntersectionNode = function(headA, headB) {
//     let head=headB
//      foo:for(headA;headA!==null;headA=headA.next){
 
//        for(headB=head;headB!=null;headB=headB.next){
//          if(headB===headA){
//            break foo
//          }
//        }
//      }
//      return headB
//  };
 /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxProduct = function(nums) {
//     let max = min = nums[0], dp = [nums[0]]

//     for (let i=1; i<nums.length; i++) {
//         if (nums[i] < 0) {
//            [max, min] = [min, max]
//         }

//         max = Math.max(max*nums[i], nums[i])
//         min = Math.min(min*nums[i], nums[i])

//         dp[i] = max
//     }

//     return Math.max(...dp)
// };

// const wordBreak = (s, wordDict) => {

//     let dp = Array(s.length + 1).fill(false);
//     dp[0] = true;

//     for(let i = 0; i <= s.length; i++){
//         for(let j = 0; j < wordDict.length; j++) {
//             if(i >= wordDict[j].length) {
//                 if(s.slice(i - wordDict[j].length, i) === wordDict[j] && dp[i - wordDict[j].length]) {
//                     dp[i] = true
//                 }
//             }
//         }
//     }

//     return dp[s.length];
// }

/**
//  * @param {number[]} nums
//  * @return {number}
//  */

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var longestConsecutive = function (nums) {
//     // 1.声明哈希表
//     const map = new Map();
//     // 2.排序数组
//     nums.sort((a, b) => a - b);
//     // 3.条件存储-这一步是核心，看懂这一步就没问题了
//     for (const num of nums) {
//         map.set(num, map.get(num - 1) + 1 || 1);
//     }
//     let ans = 0;
//     // 4.取最大值
//     for (const [index, value] of map) {
//         ans = Math.max(ans, value)
//     }
//     // 5.返回
//     return ans
// };

// let arr=[1,3,2]
// console.log((arr.sort())==[1,2,3])

// var maxProfit = function(prices) {
//     let len=prices.length
//     let r1=-prices[0]
//     let r2=0
//     let r3=0
//     for(let i=1;i<len;i++){
//         let new1=Math.max(r1,r3-prices[i])
//         let new2=r1+prices[i]
//         let new3=Math.max(r2,r3)
//         r1=new1
//         r2=new2
//         r3=new3
//     }
//     return Math.max(r2,r3)
// };


// function clone(obj){
//     let newobj=Array.isArray(obj)?[]:{}
//     for(let item in obj){
//         if(typeof obj[item]==='object'){
//             newobj[item]=clone(obj[item])
//         }else{
//             newobj[item]=obj[item]
//         }

//     }
//     return newobj
// }
let obj ={
    a:1,
    b:2
}
// let obj1=clone(obj)
// obj1.a=3

// console.log(obj)


// Function.prototype.mycall=function(args1,...args){
//     let a=Symbol()
//     args1[a]=this
//     let res=args1[a](...args)
//     delete args1[a]
//     return res
// }

// function heai(name){
//     console.log(this.a,name)
// }
// heai.mycall(obj,"zxb")


// function fix(root){
//     if(!root){
//             return root
//     }
//     [root.left,root.right]=[root.right,root.left]
//     fix(root.left)
//     fix(root.right)
//     return root
// }

// Promise.myall=function(arr){
//     return new Promise((resolve,reject)=>{
//         if(!Array.isArray(arr)){
//             throw 'err'
//         }else{
//             let arr1=[]
//             let len=arr.length
//             let count =0
//             arr.forEach((item,index)=>{
//                 Promise.resolve(item).then((res)=>{
//                     arr1[index]=res
//                     count++
//                     if(count==5){
//                         resolve(arr1)
//                     }
//                 },(err)=>{
                   
//                     reject(err)
//                 })
//             })

//         }
        

//     })
// }

// let p1=new Promise((resolve)=>{
//     resolve(3)
// })
// let p2=new Promise((resolve)=>{
//     resolve(4)
// })
// let a3=Promise.myall([p1,p2]).then((res)=>{
//     console.log(res)
// })
// console.log(a3)


// Function.prototype.mybind=function(args1,...args){
//     return (...arges)=>{
//         this.call(args1,...args,...arges)
//     }
// }
// function abc(name){
//     console.log(this.a,name)
// }
// let a1=abc.mybind(obj,":123")
// a1()

// class mypromise {
//     state='pending'
//     result=null
//     constructor(executor){
//         let resolve=function(res){
//             this.#change('fullfilling',res)
//         }
//         let reject=function(rej){
//             this.#change('reject',rej)
//         }
//     }
//     #change(state,res){
//         if(state!='pending'){
//             return
//         }
//         this.state=state
//         this.result=res

//     }
//     then(fun1,fun2){
//        let fun1= typeof fun1=='function'?fun1:value
//        let fun1= typeof fun1=='function'?fun1:value
//        if(this.state=='fulfilling'){
//         fun1(this.result)
//        }
//        else{
//         fun2(this.result)
//        }
//     }
//     catch(fun){
//         return this.then(undefined,fun)
//     }

// }


// class event{
//     constructor(){

//     }
//     #obj={}
//     on(event,fun){
//         if(!this.#obj[event]){
//             this.#obj[event]=[]
//         }
//         this.#obj[event].push(fun)
//     }
//     once(event,fun){
//         this.on(event,(...args)=>{
//             fun(...args)
//             this.delete(event)  
//         })
//     }
//     delete(event){
//         delete this.#obj[event]
//     }
// }
// class explale {
//     static #obj=null 
//     #explace(){
//         if(explale.#obj==null){
//             explale.#obj= new explale
            
//         }  7
//         return explale.#obj
//     }
// }

// let num=[100,4,200,1,3,2]
// function sort1(arr){
//         let max=-1000
//     let map=new Map()
//     arr.sort((a,b)=>a-b)
//     for(let item of arr){
//         map.set(item,map.get(item-1)+1||1)
//     }
//     for(let item of map){
//        max= Math.max(item[1],max)
//     }
//     return max
// }
// console.log(sort1(num))


// function node1(pre,ino){
//     let node=new Listnode(0)
//     node.val=pre[0]
//    let index= ino.findindex((item)=>item==node.val)
//    node.left=node1(pre.slice(1,index+1),ino.slice(0,mid))
//    node.right=node1(pre.slice(index+1,pre.length),ino.slice(mid+1,pre.length))
//     return node
// }

// let nums=[1,2,3]
// function num1(nums){
//     let res=[]
//     let path=[]
//     function husu(index,nums){
//         path.push([...res])
//         if(index>=nums.length){
//             return
//         }
//         for(let i=index;i<nums.length;i++){
//             res.push(nums[i])
//             husu(i+1,nums)
//             res.pop()
//         }
//     }
//     husu(0,nums)
//     return path
// }
// console.log(num1(nums))

// let nums1=[1,2,3]
// function sort2(nums){
//     let res=[]
//     let path=[]
//     function sort3(nums,arr){
//         if(path.length==3){
//             res.push([...path])
//             return
//         }
//         for(let i=0;i<nums.length;i++){
//             if(arr[i]==true)continue
//             path.push(nums[i])
//             arr[i]=true
//             sort3(nums,arr)
//             path.pop()
//             arr[i]=false
//         }
//     }
//     sort3(nums,[])
//     return res

// }
// console.log(sort2(nums1))

// let p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(1)
//     },1000)
// })
// let p2=p1.then((res)=>{
//     return  new Promise((resolve,reject)=>{
//         console.log(1)
//         setTimeout((res)=>{
//             resolve(1)
//         },1000)
    
//     })
// })
// p2.then(res=>{
//     console.log(res)
// })
// function instanceof1(obj,fun){
//     if(!(obj||['object','function'].includes(typeof obj))){
//         return false
//     }
//    let obj1= Object.getPrototypeOf(obj)
//     if(fun.prototype==obj1){
//       return true
//     }else if(obj1==null){
//       return false
//     }else{
//       instanceof1(obj1,fun)
//     }
//   }
//   let arr=new Array(3).fill(3)
  
//   console.log(instanceof1(arr,Array),arr instanceof Array)

// function settime(time,fun){
//     let timer=null
//     function set(){
//       timer=  setTimeout(()=>{
//             fun()
//             set()
//         },time)
//     }
//     set(time,fun)
//     return ()=>{clearTimeout(timer)}
// }

// settime(1000,()=>{console.log("123")})
// let arr=[1,2,2,3]
// function flat(arr){
//     return arr.filter((item,index)=>{ return arr.indexOf(item)==index})
// }
// console.log(flat(arr))

// function quchong(arr){
//     let res=[]
//     for(let i=0;i<arr.length;i++){
//         if(!res.includes(arr[i])){
//             res.push(arr[i])
//         }
//     }
//     return res
// }
// console.log(quchong(arr))

//   function settime(time,fun){
//     let timer=null
//    timer= setInterval(()=>{
//     fun()
//     clearInterval(timer)
//     },time)
//   }
//   settime(1000,()=>{console.log("123")})
// let obj1={
//     a:12323,
//     b:234
// }
// Function.prototype.call1=function(obj,...args){
//         let a=Symbol()
//         obj[a]=this
//         let res=obj[a](...args)
//         delete obj[a]
//         return res
// }
// function hehei(name){
//     console.log(this.a,name)
// }
// hehei.call1(obj1,"123")


// Promise.all1=function(arr1){
//     let index=0
//     let arr=[]
//    return new Promise((resolve,reject)=>{
//         arr1.forEach((item,index)=>{
//             Promise.resolve(item).then((res)=>{
//                reject()
//             }).catch(()=>{reject()})
//         })
//     })
// }

// let p1=new Promise((resolve)=>{resolve(1)})
// let p2=new Promise((resolve)=>{resolve(2)})
// let p3=new Promise((resolve)=>{resolve(3)})
// let arr1=[p1,p2,p3]

// Promise.all1(arr1).then((res)=>{console.log(res)})


// function trim(s){
//     return s.replace(/^\s+|\s+$/,'')
// }
// function trim1(s){
//     return s.replace(/^\s+(.*?)\s+$/,'$1')
// }

// console.log(trim("   asdasd  "))

// function split1(s){
//    return  s.replace(/(?=(\d{4})+$)/g,'-')
// }
// console.log(split1("18379802267"))
// function func(name){
//     this.name=name
// }

// function new1(fun){
   
//     let obj={}
//     obj._proto__=fun.prototype
//     let obj2=fun.call(obj,"123")
//     if(typeof obj2=='object'||typeof obj2=='function'){
//         return obj2
//     }else{
//        return  obj
//     }
// }

// console.log(new1(func))
let obj2={
    a:3,
    b:4
}
// function clone(obj){
//    let newobj= Array.isArray(obj)?[]:{}
//    for(let k in obj){
//     if(typeof obj[k]=='object'){
//         newobj[k]=clone(obj[k])
//     }else{
//         newobj[k]=obj[k]
//     }

//    }
//    return newobj
// }
// let a1=clone(obj2)
// a1.a=5
// console.log(a1,obj2)

// function form(s){
//     return s.replace(/(?=(\d{4})+$)/g,'.')
// }
// console.log(form("123456789"))

// let obj3={
//     a:3,
//     b:4
// }
// function create(obj){
//     let newobj={
//     }
//     newobj._proto__=obj
//     return newobj
// }
// console.log(create(obj3)._proto__.a)

// class sheler {
//     runcount=0
//     axm=3
//     constructor(){
//         this.list=[]
//     }
//     add(fun){
//         this.list.push(fun)
//         this.run()
//     }
//     run(){
//         if(this.list.length&&runcount<max){
//             this.runcount++
//             let list1=this.list.shift()
//             list1().then(()=>{
//                 this.runcount--
//                 this.run()
//             })
//         }
//     }
// }

// function get(object){
//     let s=Object.prototype.toString.call(object)
//     return s.replace(/\[object (.*?)\]/g,'$1')

// }
// console.log(get([1,2,3]))
// class fabu{
//     constructor(){
//         this.obj={}
//     }
//     on(event,fun){
//         if(!this.obj[event]){
//             this.obj[event]=[]
//         }
//         this.obj[event].push(fun)
//     }
//     delete(event){
//         delete this.obj[event]
//     }
//     once(event,fun){
//         this.on(event,()=>{
//             fun()
//             this.delete(event)
//         })

//     }
//     emit(event){
//         this.obj[event].forEach((item)=>{
//             item()
//         })
//     }
// }

// function fangdou(fun){
//     let timer=null
//     return function(){
//         if(!timer)clearTimeout(timer)
//       timer=  setTimeout(()=>{
//             fun()
//         },1000)
//     }
// }

// function jieliu(fun){
//     let timer=null
//     return function(){
//         if(!timer){
//           timer=  setTimeout(()=>{
//                 fun()
//                 timer=null
//             })
//         }
//     }
// }

// let res=[]
// function dfs(root){
//     if(!root)return
//     dfs(root.left)
//     res.push(root.val)
//     dfs(root.right)
// }

// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 示例 2：

// let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// function merge(nums1,m,nums2,n){
//      nums1.splice(nums1.length-m,n,...nums2)
//      return nums1.sort((a,b)=>a-b)
// }
// console.log(merge(nums1,m,nums2,n))
// let nums = [0,1,2,2,3,4,4]

// nums=nums.filter((item,index)=>nums.indexOf(item)==index)
// console.log(nums)

// let nums1 = [1,2,2,1], nums2 = [2,2]



// let k=[2,5,3,4,20],n=2
// function dele(arr,n){
//   let count=0
//   for(let i=0;i<arr.length;i++){
//     for(let j=1;j<arr.length;j++){
//         let arr1=[...arr]
//       arr1.splice(i,j)
//       let sum=arr1.reduce((prev,cur)=>prev*cur,1)
//       if(sum%n*10==0){
//         count++
//       }
//     }
//   }
//   return count
// }
// console.log(dele(k))


const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let [m,n] = (await readline()).trim().split(' ').map(Number);
    let arr = (await readline()).trim().split(' ').map(Number);

    function dele(arr,n){
        let count=0
        for(let i=0;i<arr.length;i++){
          for(let j=1;j<arr.length;j++){
              let arr1=[...arr]
            arr1.splice(i,j)
            let sum=arr1.reduce((prev,cur)=>prev*cur,1)
            if(sum%(Math.pow(10,n))==0){
              count++
            }
          }
        }
        return count
      }
      console.log(dele(arr, n));
      rl.close();
}();

