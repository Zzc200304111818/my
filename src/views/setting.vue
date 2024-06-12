<template>
    <HeaderButton :title="title"></HeaderButton>
    <van-cell title="账号管理" is-link to="/mine/setting/accountManage" size="large" />
</template>
<script setup>
import HeaderButton from '@/components/HeaderButton.vue'
import { ref } from 'vue'
const title = ref('设置')
const hello = null
</script>