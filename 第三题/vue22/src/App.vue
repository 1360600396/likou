<template>
  <div id="app">
    输入框:<input type="text" v-model="msg1" /> 添加:<button @click="add()">
      按钮
    </button>
    <HelloWorld :value="msg" @emit1="meth"></HelloWorld>
    <MainBody :list="list" @del='del1'></MainBody>
    <MainFooter :list="list" @qk='qk'></MainFooter>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MainFooter from './components/MainFooter.vue'
import MainBody from './components/MainBody.vue'


  export default {
    name:'App',
    components:{
      HelloWorld,
      MainBody,
      MainFooter
    },
    data(){
      return {
        msg1:'',
        msg:'1234',
        list:[{
          id:1,
          name:'123'
        },{
          id:2,
          name:'1234'
        }
      ]
      }
    },
    methods:{
      qk(){
        this.list=[]
      },
      del1(id){
        this.list=this.list.filter(item=>{
          return item.id!=id
        })
      },
      add(){
        this.list.push({
          id:this.list.length+1,
          name:this.msg1
        })
    }
  }
}
</script>

<style scoped></style>
