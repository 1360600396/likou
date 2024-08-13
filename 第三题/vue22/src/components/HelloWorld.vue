<template>
  <div>
<div >{{value}}</div>

<button @click="fn">发送事件</button>
  </div>
</template>

<script>
  export default {
    props:['value']
    ,methods:{
      fn(){
        this.$emit('emit1','hello')
      }
    }
  }
</script>

<style scoped>

</style>