<template>
  <HeaderButton :title="title"></HeaderButton>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="name"
        name="标题"
        label="标题"
        placeholder="标题"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="content"

        name="反馈内容"
        label="反馈内容"
        placeholder="反馈内容"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit" >
        提交
      </van-button>
    </div>
  </van-form>
</template>
<script setup>
import HeaderButton from "@/components/HeaderButton.vue";
import { ref } from "vue";

import { showConfirmDialog } from 'vant';

const title = ref("用户反馈");

const name = ref("");
const content = ref("");
const onSubmit = (values) => {
  showConfirmDialog({
  title: '标题',
  message:
    '',
})
  .then(() => {
    console.log("submit", values);
    // on confirm
  })
  .catch(() => {
    // on cancel
  });
};
</script>
