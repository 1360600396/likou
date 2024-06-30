<template>
  <a-form
    ref="formRef"
    :model="formState"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-item ref="name" label="Activity name" name="name">
      <a-input v-model:value="formState.name" />
    </a-form-item>
    <a-form-item label="Activity zone" name="region">
      <a-select v-model:value="formState.region" placeholder="please select your zone">
        <a-select-option value="shanghai">Zone one</a-select-option>
        <a-select-option value="beijing">Zone two</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="Activity time" required name="date1">
      <a-date-picker
        v-model:value="formState.date1"
       
        type="date"
        placeholder="Pick a date"
        style="width: 100%"
      />
     
    </a-form-item>
    <a-form-item label="Instant delivery" name="delivery">
      <a-switch v-model:checked="formState.delivery" />
    </a-form-item>
    <a-form-item label="Activity type" name="type">
      <a-checkbox-group v-model:value="formState.type">
        <a-checkbox value="1" name="type">Online</a-checkbox>
        <a-checkbox value="2" name="type">Promotion</a-checkbox>
        <a-checkbox value="3" name="type">Offline</a-checkbox>
      </a-checkbox-group>
    </a-form-item>
    <a-form-item label="Resources" name="resource">
      <a-radio-group v-model:value="formState.resource">
        <a-radio value="1">Sponsor</a-radio>
        <a-radio value="2">Venue</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="Activity form" name="desc">
      <a-textarea v-model:value="formState.desc" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
    </a-form-item>
    <button @click="fn()">点击回显表单</button>
  </a-form>
</template>
<script>
import moment from 'moment';
import { defineComponent, reactive, ref, toRaw } from 'vue';
import { intToTime, timeToInt } from "../utils/base";
export default defineComponent({
  setup() {
    const formRef = ref();
    const formState = ref({
      name: '',
      region: undefined,
      date1: undefined,
      delivery: false,
      type: [],
      resource: '',
      desc: '',
    });
    const rules = {
      name: [
        {
          required: true,
          message: 'Please input Activity name',
          trigger: 'blur',
        },
        {
          min: 3,
          max: 5,
          message: 'Length should be 3 to 5',
          trigger: 'blur',
        },
      ],
      region: [
        {
          required: true,
          message: 'Please select Activity zone',
          trigger: 'change',
        },
      ],
      date1: [
        {
          required: true,
          message: 'Please pick a date',
          trigger: 'change',
          type: 'object',
        },
      ],
      type: [
        {
          type: 'array',
          required: true,
          message: 'Please select at least one activity type',
          trigger: 'change',
        },
      ],
      resource: [
        {
          required: true,
          message: 'Please select activity resource',
          trigger: 'change',
        },
      ],
      desc: [
        {
          required: true,
          message: 'Please input activity form',
          trigger: 'blur',
        },
      ],
    };
    const fn=()=>{
      console.log(timeToInt(formState.value.date1))
      const unixTimestamp = 1718121600;
  const dateObject = new Date(unixTimestamp * 1000); // 将 Unix 时间戳转换为毫秒，并创建一个新的 Date 对象
  formState.value.date1 = dateObject;
      formState.value.date1=moment.unix(1718121600)
    }
    const onSubmit = () => {
      
  //     console.log(timeToInt(formState.value.date1))
  //     const unixTimestamp = 1718121600;
  // const dateObject = new Date(unixTimestamp * 1000); // 将 Unix 时间戳转换为毫秒，并创建一个新的 Date 对象
  // formState.value.date1 = dateObject;
  //     formState.value.date1=moment.unix(1718121600)
      // formState.value.date1=moment(formState.value.date1).format('YYYY-MM-DD');
      formRef.value
        .validate()
        .then(() => {
          console.log('values', formState, toRaw(formState));
        })
        .catch(error => {
          console.log('error', error);
        });
    };
    const resetForm = () => {
      formRef.value.resetFields();
    };
    return {
      formRef,
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
      other: '',
      formState,
      rules,
      onSubmit,
      resetForm,
      fn
    };
  },
});
</script>