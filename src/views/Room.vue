<template>
  <HeaderButton :title="title"></HeaderButton>

  <van-notice-bar left-icon="volume-o" :scrollable="false">
    <van-swipe
      vertical
      class="notice-swipe"
      :autoplay="3000"
      :touchable="false"
      :show-indicators="false"
    >
      <van-swipe-item>上厕所后及时冲水。</van-swipe-item>
      <van-swipe-item>凌晨后请勿发出声响。</van-swipe-item>
      <van-swipe-item>随手关灯关门。</van-swipe-item>
    </van-swipe>
  </van-notice-bar>

  <van-cell-group inset>
    <van-cell title="静庐E栋" value="222寝室" />
    <van-cell title="寝室成员" value="谢磊" label="描述信息" />
  </van-cell-group>

  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="workname"
        name="室友学号"
        label="室友学号"
        placeholder="室友学号"
        :rules="[{ required: true, message: '请填写室友学号' }]"
      />
      <van-field
        v-model="work"
        name="室友姓名"
        label="室友姓名"
        placeholder="室友姓名"
        :rules="[{ required: true, message: '请填写室友姓名' }]"
      />
      <van-field
        v-model="player"
        name="电话号码"
        label="电话号码"
        placeholder="电话号码"
        :rules="[{ required: true, message: '请填写电话号码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        添加
      </van-button>
    </div>
  </van-form>
</template>
<script setup>
import HeaderButton from "@/components/HeaderButton.vue";
import { ref } from "vue";
import { showConfirmDialog } from 'vant';
const title = ref("宿舍管理");

const workname = ref("");
const work = ref("");
const player = ref("");

const onSubmit = (values) => {
  showConfirmDialog({
  title: '是否添加',

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
