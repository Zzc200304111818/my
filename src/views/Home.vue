<template>
    <Header :title="title"></Header>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#3296fa">
        <van-swipe-item><img src="../resource/image1.jpg"></van-swipe-item>
        <van-swipe-item><img src="../resource/image2.jpg"></van-swipe-item>
        <van-swipe-item><img src="../resource/image3.jpg"></van-swipe-item>
        <van-swipe-item><img src="../resource/image4.jpg"></van-swipe-item>
    </van-swipe>
    <van-grid>
        <van-grid-item icon="apps-o" text="系统管理" to="/management" />
        <van-grid-item icon="friends-o" text="我的舍友" to="/menber" />
        <van-grid-item icon="notes-o" text="任务栏" to="/workList" />
        <van-grid-item icon="calendar-o" text="任务日志" to="/calendar" />
    </van-grid>
    <Footer></Footer>




</template>
<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import { ref, provide } from 'vue'
const active = ref('home')
const title = ref('首页')
provide('active', active.value)
</script>
