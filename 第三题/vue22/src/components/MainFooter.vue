<template>
  <div>
    <div v-show='list.length'>{{list.length}}</div>

<button @click='qk'>清空</button>
  </div>
</template>

<script>
  export default {
    props:['list'],
    methods:{
      qk(){
        this.$emit('qk')
      }
    }
  }
</script>

<style  scoped>

</style>