<script setup>
import { inject } from 'vue';
defineExpose({
  msg:String
})
const emit=defineEmits(['shunz'])
const fn=(()=>{
  emit('shunz','孙子')
})
const inject1=inject('pro')
</script>

<template>
  <div>{{ msg }}</div>
  <button @click="fn"></button>
  <div>{{ inject1 }}</div>
</template>



<style>

</style>