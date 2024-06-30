

function  maxProduct(nums) {
    let max = -Infinity, imax = 1, imin = 1;
    
    for(let num of nums){
        if(num < 0) [imax, imin] = [imin, imax];
        
        imax = Math.max(imax*num, num);
        imin = Math.min(imin*num, num);
        
        max = Math.max(max, imax);
    }
    
    return max;
  }


  console.log(maxProduct())

