/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let res=[]
  let path=[]
  if(amount==0){
      return 0
  }
  if(coins.length==1){
    if(  coins[0]>amount){
      return -1
    }else if(coins[0]==amount){
      return 1
    }else if(coins[0]<amount){
      return amount%coins[0]==0? amount/coins[0]:-1
    }
      
  }
  
  function dfs(coins,amount,sum,index){
      if(sum>amount)return
      if(sum==amount){
          path.push([...res])
          return
      }
      for(let i=index;i<coins.length;i++){
          res.push(coins[i])
          sum+=coins[i]
          dfs(coins,amount,sum,i)
          sum-=coins[i]
          res.pop()
      }
  }
  dfs(coins,amount,0,0)
  return path.sort((a,b)=>a.length-b.length)[0].length
};
let coins = [1], amount = 0
console.log(coinChange(coins,amount))