<template>
    <Header :title="title"></Header>
    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
    <Footer></Footer>
</template>
<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import { ref, provide } from 'vue'
const active = ref('chat')
const title = ref('消息')
provide('active', active.value)
const list = ref([])
const loading = ref(false)
const finished = ref(false)
const message = ['你好吗？', '你在哪里？', '明天要答辩你睡得着吗?', '这个年纪你睡的早？', '明天必须得早起', '好烦啊！！！明天还要答辩', '我们项目还没做完，还是个半成品', '这可咋办啊？']
const onLoad = () => {

    setTimeout(() => {
        for (let i = 0; i < message.length; i++) {
            list.value.push(message[i])
        }

        // 加载状态结束
        loading.value = false

        // 数据全部加载完成
        if (list.value.length == message.length) {
            finished.value = true
        }
    }, 1000)
}
</script>