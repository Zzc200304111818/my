<template>
    <van-tabbar v-model="active">
        <van-tabbar-item name="home" icon="home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item name="chat" icon="chat-o" to="/message">消息</van-tabbar-item>
        <van-tabbar-item name="setting" icon="user-circle-o" to="/mine">个人中心</van-tabbar-item>
    </van-tabbar>
</template>
<script setup>
import { inject, ref } from 'vue'
const active = ref('')
active.value = inject('active')
</script>