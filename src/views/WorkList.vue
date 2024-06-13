<template>
  <HeaderTwoButton :title="title"></HeaderTwoButton>
  <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <van-card v-for="(item, index) in list" :key="index" :num="item.time" :desc="item.desc" :title="item.taskName"
      thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg" :tag="item.tag" :price="item.name" />
  </van-list>


  <van-pagination v-model="currentPage" :total-items="24" :items-per-page="5" />


</template>
<script setup>
import HeaderTwoButton from "@/components/HeaderTwoButton.vue"
import { ref } from "vue"

const title = ref("任务栏")
const currentPage = ref(1)
const list = ref([])
const tasks = ref(JSON.parse(localStorage.getItem('tasks')) || [])
const loading = ref(false)
const finished = ref(false)
const onLoad = () => {
  setTimeout(() => {
    const start = (currentPage.value - 1) * 4 // 假设每页显示4个任务  
    const end = start + 4 // 或者使用 Math.min(start + 4, tasks.value.length) 来确保不会超出任务数组的长度  

    for (let i = start; i < end && i < tasks.value.length; i++) {
      const taskObj = {
        time: "截止时间：" + tasks.value[i].result,
        desc: "任务描述：" + tasks.value[i].work,
        taskName: "任务名称：" + tasks.value[i].workname,
        tag: `任务${i + 1}`,// 如果你想要的是全局的任务序号，而不是当前页的任务序号
        // 如果你想要的是当前页的任务序号，可以使用 `任务${i - start + 1}`  
        name: "对象：" + tasks.value[i].player
      }
      list.value.push(taskObj)
    }

    loading.value = false

    if (list.value.length >= tasks.value.length) {
      finished.value = true
    }
  }, 1000)
}

</script>
