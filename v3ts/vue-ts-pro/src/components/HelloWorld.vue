<template>
  <a-table :columns="columns" :data-source="data" @change="onChange" />
</template>
<script>
import { defineComponent } from 'vue';
const columns = [
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filterMultiple: false,
   
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  },
];
const data = [
  {
    key: '1',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];
export default defineComponent({
  setup() {
    const onChange = (pagination, filters, sorter) => {
      console.log('params', pagination, filters, sorter);
    };
    function timeToInt(time){
	if(time == undefined){
		return 0;
	}else if(time == ''){
		return 0;
	}else{
		return moment(time).unix();
	}
}
    return {
      data,
      columns,
      onChange,
    };
  },
});
</script>