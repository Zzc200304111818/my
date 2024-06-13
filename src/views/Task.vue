<template>
  <HeaderButton :title="title"></HeaderButton>

  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="workname"
        name="任务名"
        label="任务名"
        placeholder="任务名"
        :rules="[{ required: true, message: '请填写任务名' }]"
      />
      <van-field
        v-model="work"
        name="任务详情"
        label="任务详情"
        placeholder="任务详情"
        :rules="[{ required: true, message: '请填写任务详情' }]"
      />
      <van-field
        v-model="player"
        name="任务对象"
        label="任务对象"
        placeholder="任务对象"
        :rules="[{ required: true, message: '请填写任务对象' }]"
      />


      <van-field
        v-model="result"
        is-link
        readonly
        name="任务开始时间"
        label="时间选择"
        placeholder="点击选择时间"
        @click="showPicker = true"
      />
      <van-popup v-model:show="showPicker" position="bottom">
        <van-date-picker @confirm="onConfirm" @cancel="showPicker = false" />
      </van-popup>
    </van-cell-group>


    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>
<script setup>
import HeaderButton from "@/components/HeaderButton.vue";
import { ref } from "vue";
import { showConfirmDialog } from 'vant';
const title = ref("任务发布");

const workname = ref("");
const work = ref("");
const player = ref("");

const onSubmit = (values) => {
  showConfirmDialog({
  title: '是否发布',

})
  .then(() => {
    console.log("submit", values);
    // on confirm
  })
  .catch(() => {
    // on cancel
  });
};


const result = ref('');
    const showPicker = ref(false);
    const onConfirm = ({ selectedValues }) => {
      result.value = selectedValues.join('/');
      showPicker.value = false;
    };
</script>
