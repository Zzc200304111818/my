<template>
    <HeaderButton :title="title"></HeaderButton>
    <van-cell-group>
        <van-cell title="姓名" value="内容" />
        <van-cell title="联系方式" value="内容"  />
        <van-cell title="学院" value="内容"  />
    </van-cell-group>


</template>
<script setup>
import HeaderButton from '@/components/HeaderButton.vue';
import { ref } from 'vue'
const title = ref('我')
</script>