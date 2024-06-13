<template>
  <HeaderTwoButton :title="title"></HeaderTwoButton>

  <van-form @failed="onFailed">
    <van-cell-group inset>
      <!-- 通过 pattern 进行正则校验 -->
      <van-field
        v-model="value1"
        name="pattern"
        placeholder="正则校验"
        :rules="[{ pattern, message: '请输入正确内容' }]"
      />
      <!-- 通过 validator 进行函数校验 -->
      <van-field
        v-model="value2"
        name="validator"
        placeholder="函数校验"
        :rules="[{ validator, message: '请输入正确内容' }]"
      />
      <!-- 通过 validator 返回错误提示 -->
      <van-field
        v-model="value3"
        name="validatorMessage"
        placeholder="校验函数返回错误提示"
        :rules="[{ validator: validatorMessage }]"
      />
      <!-- 通过 validator 进行异步函数校验 -->
      <van-field
        v-model="value4"
        name="asyncValidator"
        placeholder="异步函数校验"
        :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>
<script setup>
import HeaderTwoButton from "@/components/HeaderTwoButton.vue";
import { ref } from "vue";

const title = ref("任务栏");

const value1 = ref("");
const value2 = ref("");
const value3 = ref("abc");
const value4 = ref("");
const pattern = /\d{6}/;

// 校验函数返回 true 表示校验通过，false 表示不通过
const validator = (val) => /1\d{10}/.test(val);

// 校验函数可以直接返回一段错误提示
const validatorMessage = (val) => `${val} 不合法，请重新输入`;

// 校验函数可以返回 Promise，实现异步校验
const asyncValidator = (val) =>
  new Promise((resolve) => {
    showLoadingToast("验证中...");

    setTimeout(() => {
      closeToast();
      resolve(val === "1234");
    }, 1000);
  });

const onFailed = (errorInfo) => {
  console.log("failed", errorInfo);
};
</script>
