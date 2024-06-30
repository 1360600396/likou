var longestPalindrome = function(s) {
  if(s.length<2){
      return s
  }
  let maxstr=''
  function calcul(left,right){
          while(left>0&&right<s.length&&s[left]==s[right]){
              left--
              right++
          }
          let s1=s.slice(left+1,right)
          if(s1.length>maxstr.length){
              maxstr=s1
              debugger
          }
  }
  debugger
  for(let i=0;i<s.length;i++){
      calcul(i,i)
      calcul(i,i+1)

  }
  return maxstr
  
};

longestPalindrome("babad")
