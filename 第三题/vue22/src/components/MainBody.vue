<template>
  <div>

    <div v-for='(item,index) in list' >
    {{item.name}}
      <button @click='del(item.id)'>删除</button>
  </div>
  
  </div>
</template>

<script>
  export default {
    props:['list'],
    data(){
      return {

      }
    },
    methods:{
        del(id){
          this.$emit('del',id)
        }
    }
  }
</script>

<style scoped>

</style>