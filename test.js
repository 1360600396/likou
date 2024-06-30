let url='https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=02003390_84_hao_pg&wd=%E9%95%BF%E6%98%A5%E6%97%85%E6%B8%B8%E5%AD%A6%E9%99%A2&fenlei=256&oq=%25E9%2595%25BF%25E6%2598%25A5%25E6%2597%2585%25E6%25B8%25B8&rsv_pq=b49cb8b00034e5ba&rsv_t=0915GbrQHdVPRwh2yVk%2F7fHdwrlLj%2Bj%2FJjx8hRGnvNtQVfkaUa6FeNGNgGU6ReCo3TLAPWCEs5TH&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&inputT=4538&rsv_sug3=24&rsv_sug1=19&rsv_sug7=100&rsv_sug2=0&rsv_sug4=4676'
let object={}
let arr=url.split('?')
let arr1=arr[1]
let arr2=arr1.split('&')
let length=arr2.length
for(let i=0;i<length;i++){
    let [a,b]=arr2[i].split('=')
    
   object[a]=b
}
console.log(object)