<template>
    <van-nav-bar title="首页" class="page-nav-bar" />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="../resource/image1.jpg"></van-swipe-item>
        <van-swipe-item><img src="../resource/image2.jpg"></van-swipe-item>
        <van-swipe-item><img src="../resource/image3.jpg"></van-swipe-item>
        <van-swipe-item><img src="../resource/image4.jpg"></van-swipe-item>
    </van-swipe>
    <van-grid>
        <van-grid-item icon="shop-collect-o" text="宿舍管理" />
        <van-grid-item icon="friends-o" text="我的舍友" />
        <van-grid-item icon="notes-o" text="任务列表" />
        <van-grid-item icon="calendar-o" text="日历" />
    </van-grid>




    <van-tabbar v-model="active">
        <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item name="chat" icon="chat-o">消息</van-tabbar-item>
        <van-tabbar-item name="setting" icon="user-circle-o">个人中心</van-tabbar-item>
    </van-tabbar>
</template>
<script setup>
import { ref } from 'vue'


const active = ref('home')


</script>
<style>
.my-swipe .van-swipe-item {
    color: #fff;
    line-height: 200px;
    text-align: center;
}

img {
    width: 100%;
}
</style>