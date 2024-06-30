<script setup>
import{ref,computed, watch, provide}from 'vue'
import { onBeforeMount,onMounted} from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import HellWorl from './components/HellWorl.vue'
const refvalue=ref(null)

onBeforeMount(()=>{

})
onMounted(()=>{

})

const count=ref(1)
const count1=ref({count1:2})
const add=()=>{
  count.value++
}
const add2=()=>{
    count1.value.count1++
}

const msg1=ref("")
const arr=ref([1,2,3,4,5])
const comput=computed(()=>count.value*2)
console.log(msg1)
const filterList = computed(()=>{return arr.value.filter((item)=>item>2)})

  watch(count,( newValue, oldValue ) => {
   console.log(`新数据是${newValue},老数据是${oldValue}`)
  })
  watch([count,arr],( [newCount, newArr],[oldCount, oldArr] ) => {
   console.log(`新数据1是${newCount},新数据2是${newArr},老数据1${oldCount},老数据2${oldArr}`)
  },{
    immediate:true
  })
  watch(count1,()=>{
      console.log('数据改变了')
  },{
    deep:true
  })
let get=(msg)=>{
  msg1.value=msg
}
defineExpose({
  msg1,
  arr
})
const logRefValue = () => {
  console.log(refvalue.value.number);
};
provide('pro','asdasdasdasd')
</script>

<template>
  <div>
    <HellWorl/>
    <HelloWorld 
    message="周小彪"
    @getlist="get"
    ref="refvalue"
    />
    <button @click="add2">{{ count1.count1 }}</button>
    <button @click="add">我是按钮2{{ count }}</button>
    <span>{{ comput }}</span>
    <span>{{ filterList }}</span>
    <span>{{ msg1 }}</span>
    <button>查看子组件的数据</button>
    <button @click="logRefValue">zzj</button>
    
  </div>
</template>

<style scoped></style>
