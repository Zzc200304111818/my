<template>
    <HeaderButton :title="title"></HeaderButton>
    <van-calendar title="日历" :poppable="false" :show-confirm="false" :style="{ height: '500px' }" />

</template>
<script setup>
import HeaderButton from '@/components/HeaderButton.vue'
import { ref } from "vue"

const title = ref('任务日志')

</script>