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

  <van-cell-group inset>
    <van-cell title="入住校区楼栋" value="" />
    <van-cell title="下列更改校区楼号信息："  label="修改后点击按钮提交" />
  </van-cell-group>

  <van-field
    v-model="fieldValue"
    is-link
    readonly
    label="校区楼号选择："
    placeholder="请选择所在校区和楼号"
    @click="show = true"
  />
  <van-popup v-model:show="show" round position="bottom">
    <van-cascader
      v-model="cascaderValue"
      title="请选择所在校区和楼号"
      :options="options"
      @close="show = false"
      @finish="onFinish"
    />
  </van-popup>

  <van-cell-group inset>
    <van-cell title="下列选择楼层：" value="" label="修改后点击按钮提交"/>
  </van-cell-group>

  <van-dropdown-menu>
    <van-dropdown-item v-model="value1" :options="option1" />
  </van-dropdown-menu>

  <van-button type="primary" block>提交</van-button>
</template>
<script setup>
import { ref } from "vue";
import { showToast } from "vant";
import HeaderButton from "@/components/HeaderButton.vue";
const title = ref("楼层管理");

const show = ref(false);
const fieldValue = ref("");
const cascaderValue = ref("");
// 选项列表，children 代表子选项，支持多级嵌套
const options = [
  {
    text: "蛟桥园",
    value: "330000",
    children: [{ text: "1楼", value: "330100" }],
  },
  {
    text: "枫林园",
    value: "330000",
    children: [{ text: "1楼", value: "330100" }],
  },
  {
    text: "麦庐园",
    value: "320000",
    children: [
      { text: "宁庐", value: "a" },
      {
        text: "静庐",
        value: "b",
        children: [
          { text: "A栋", value: "1" },
          { text: "B栋", value: "2" },
          { text: "C栋", value: "3" },
          { text: "D栋", value: "4" },
          { text: "E栋", value: "5" },
        ],
      },
      { text: "祥庐", value: "c" },
      { text: "和庐", value: "d" },
    ],
  },
];
// 全部选项选择完毕后，会触发 finish 事件
const onFinish = ({ selectedOptions }) => {
  show.value = false;
  fieldValue.value = selectedOptions.map((option) => option.text).join("/");
};

const value1 = ref(0);
const option1 = [
  { text: "1楼", value: 0 },
  { text: "2楼", value: 1 },
  { text: "3楼", value: 2 },
  { text: "4楼", value: 3 },
  { text: "5楼", value: 4 },
  { text: "6楼", value: 5 },
];
</script>
