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
      <van-swipe-item>楼道内请勿抽烟。</van-swipe-item>
      <van-swipe-item>安全通道口请勿堆放杂物。</van-swipe-item>
      <van-swipe-item>12点后楼层断电。</van-swipe-item>
    </van-swipe>
  </van-notice-bar>
  <form @submit.prevent="">
    <van-field
    v-model="result"
    is-link
    readonly
    name="picker"
    label="选择器"
    placeholder="点击选择城市"
    @click="showPicker = true"
  />
  <van-popup v-model:show="showPicker" position="bottom">
    <van-picker
      :columns="columns"
      @confirm="onConfirm"
      @cancel="showPicker = false"
    />
  </van-popup>

  <van-button type="primary" block native-type="submit">提交</van-button>
  </form>
</template>
<script setup>
import { ref } from "vue"

import HeaderButton from "@/components/HeaderButton.vue";
const title = ref("楼层管理")
const result = ref("");
const showPicker = ref(false)
console.log(result.value)
const columns = [
  { text: "杭州", value: "Hangzhou" },
  { text: "宁波", value: "Ningbo" },
  { text: "温州", value: "Wenzhou" },
  { text: "绍兴", value: "Shaoxing" },
  { text: "湖州", value: "Huzhou" },
]

const onConfirm = ({ selectedOptions }) => {
  result.value = selectedOptions[0]?.text;
  showPicker.value = false;
}
const handleSubmit = () => {
  conoel.log(reult.value)
}  
</script>
