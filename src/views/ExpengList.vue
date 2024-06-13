<template>
  <HeaderButton :title="title"></HeaderButton>

  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field v-model="name" name="账单名称" label="账单名称" placeholder="账单名称"
        :rules="[{ required: true, message: '请填写账单名称' }]" />
      <van-field v-model="price" name="账单金额" label="账单金额" placeholder="账单金额"
        :rules="[{ required: true, message: '请填写账单金额' }]" />
      <van-field v-model="note" name="账单备注" label="账单备注" placeholder="账单备注"
        :rules="[{ required: true, message: '请填写账单备注' }]" />


      <van-field v-model="result" is-link readonly name="账单时间" label="时间选择" placeholder="点击选择时间"
        @click="showPicker = true" />
      <van-popup v-model:show="showPicker" position="bottom">
        <van-date-picker @confirm="onConfirm" @cancel="showPicker = false" />
      </van-popup>
    </van-cell-group>


    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        添加账单
      </van-button>
    </div>
  </van-form>
</template>
<script setup>
import HeaderButton from "@/components/HeaderButton.vue"
import { ref } from "vue"
import { showConfirmDialog } from 'vant'
const title = ref("账单添加")

const name = ref("")
const price = ref("")
const note = ref("")

const onSubmit = (values) => {
  showConfirmDialog({
    title: '是否添加账单',

  })
    .then(() => {
      console.log("submit", values)
      // on confirm
    })
    .catch(() => {
      // on cancel
    })
}


const result = ref('')
const showPicker = ref(false)
const onConfirm = ({ selectedValues }) => {
  result.value = selectedValues.join('/')
  showPicker.value = false
}
</script>