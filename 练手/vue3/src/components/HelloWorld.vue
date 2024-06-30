<script setup>
import{ref}from 'vue'
import HelloWor from './HelloWor.vue';
const props=defineProps({
  message:{
    require:true,
    type:String
  }
})
const emit=defineEmits(['getlist'])
const number=ref(180)
const send=()=>{
  emit('getlist','周小彪123') 
}
console.log(props,emit)
const fn=(msg)=>{
  emit('getlist',msg)
}
defineExpose({
  number
})
</script>

<template>
  <HelloWor msg="孙子组件" @shunz="fn"/>
 <div>{{message}}</div>
 <button @click="send">子传父</button>
</template>

<style scoped>

</style>
