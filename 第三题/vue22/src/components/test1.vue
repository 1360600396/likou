<template>
  <div>
    <div v-html="123"></div>
    <p v-for="(item, index) in obj2" :key="index">{{ item }}</p>
    <p v-if="bool">{{ name }}</p>
    <p v-else-if="bool == false">{{ name }}2</p>
    <button @click="change">显示隐藏</button>
    <ul>
      <li
        v-for="(item, index) in list"
        :key="item.id"
        :class="{ active: actindex == item.id }"
      >
        <span>{{ item.name }}</span>
        <span>{{ item.author }}</span>
        <span>{{ index }}</span>
        <button @click="del(index)">删除</button>
        <button @click="active(item.id)">高亮</button>
      </li>
    </ul>
    账号： <input type="text" v-model="text" />
    <button @click="add">添加</button>
    <img :alt="abc" />
    <br />
    <span>{{ list.length }}</span>
    <button @click="delall">清空</button>
    <span :style="{ color, backgroundColor: 'red' }" :class="{ box1: true }">{{
      tol1
    }}</span>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  data() {
    return {
      actindex: 0,
      color: "red",
      name: "周小彪",
      obj: 1,
      obj2: [1, 2],
      bool: true,
      abc: "123",
      list: [
        { id: 1, name: "《红楼梦》", author: "曹雪芹" },
        { id: 2, name: "《西游记》", author: "吴承恩" },
        { id: 3, name: "《水浒传》", author: "施耐庵" },
        { id: 4, name: "《三国演义》", author: "罗贯中" },
      ],
      text: "123",
      len: 3,
    };
  },
  methods: {
    change() {
      this.bool = !this.bool;
    },
    del(index) {
      this.list.splice(index, 1);
    },
    add() {
      this.list.unshift({
        id: this.list.length + 1,
        name: this.text,
        author: "曹雪芹",
      });
    },
    delall() {
      this.list = [];
    },
    active(id) {
      this.actindex = id;
    },
  },
  computed: {
    tol() {
      return this.list.reduce((prev, cur) => {
        return prev + cur.id;
      }, 0);
    },
    tol1: {
      get() {
        return this.list.reduce((prev, cur) => {
          return prev + cur.id;
        }, 0);
      },
    },
  },
  watch:{
    tol1(newValue, oldValue){
      console.log(newValue, oldValue)
    }
  }
};
</script>

<style scoped>
.box1 {
  margin-left: 50px;
}
.active {
  background-color: red;
}
</style>
