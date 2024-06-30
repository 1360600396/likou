const vaild=(s)=>{
  const vaild1=(start,end)=>{
    while(start<end){
      if(s[start]!=s[end]){
        return false
      }
      start++
      end--
    }
    return true

  }


  let i=0
  let j=s.length
  while(i<j&&s[i]==s[j]){
    i++
    j--

  }

if(vaild1(i+1,j)){
  return true
}
if(vaild1(i,j-1)){
  return true
}

return false

}

console.log(vaild('aca'))