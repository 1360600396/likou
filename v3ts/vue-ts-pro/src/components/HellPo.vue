<template>
  <a-table
    :columns="columns"
    :row-key="record => record.login.uuid"
    :data-source="dataSource"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  >
    <template #name="{ text }">{{ text.first }} {{ text.last }}</template>
  </a-table>
</template>
<script>
import { usePagination } from 'vue-request';
import { computed, defineComponent } from 'vue';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
    slots: {
      customRender: 'name',
    },
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      {
        text: 'Male',
        value: 'male',
      },
      {
        text: 'Female',
        value: 'female',
      },
    ],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];
const queryData = params => {
  return `https://randomuser.me/api?noinfo&${new URLSearchParams(params)}`;
};
export default defineComponent({
  setup() {
    const {
      data: dataSource,
      run,
      loading,
      current,
      pageSize,
    } = usePagination(queryData, {
      formatResult: res => res.results,
      pagination: {
        currentKey: 'page',
        pageSizeKey: 'results',
      },
    });
    const pagination = computed(() => ({
      total: 200,
      current: current.value,
      pageSize: pageSize.value,
    }));
    const handleTableChange = (pag, filters, sorter) => {
      run({
        results: pag.pageSize,
        page: pag?.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      });
    };
    return {
      dataSource,
      pagination,
      loading,
      columns,
      handleTableChange,
    };
  },
});
</script>