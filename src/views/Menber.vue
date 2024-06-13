<template>
  <HeaderButton :title="title"></HeaderButton>
  <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <van-card v-for="(item, index) in list" :key="index" :desc="item.stuNo" :title="item.name" :num="item.phoneNumber"
      thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg" :tag="item.tag" />
  </van-list>
</template>
<script setup>
import HeaderButton from '@/components/HeaderButton.vue'
import { ref } from "vue"
const menbers = ref(JSON.parse(localStorage.getItem('menbers') || '[]'))
const title = ref('我的舍友')
const currentPage = ref(1)
const list = ref([])
const loading = ref(false)
const finished = ref(false)
const onLoad = () => {
  setTimeout(() => {
    const start = (currentPage.value - 1) * 5 // 假设每页显示5个任务  
    const end = start + 5 // 或者使用 Math.min(start + 5, menbers.value.length) 来确保不会超出任务数组的长度  

    for (let i = start; i < end && i < menbers.value.length; i++) {
      const taskObj = {
        phoneNumber: "电话号码：" + menbers.value[i].phoneNumber,
        stuNo: '学号：' + menbers.value[i].stuNo,
        name: '姓名：' + menbers.value[i].name,
        tag: `${i + 1}号舍友` // 如果你想要的是全局的任务序号，而不是当前页的任务序号  
        // 如果你想要的是当前页的任务序号，可以使用 `任务${i - start + 1}`  
      }
      list.value.push(taskObj)
    }

    loading.value = false

    if (list.value.length >= menbers.value.length) {
      finished.value = true
    }

    currentPage.value++ // 更新页码，以便下次加载下一页的数据  
  }, 1000)
}


</script>