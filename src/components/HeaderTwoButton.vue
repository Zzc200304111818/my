<template>
    <van-nav-bar :title="title" class="page-nav-bar" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight"  right-text="发布任务" />
</template>
<script setup>
const props = defineProps({
    title: String
})
const onClickLeft = () => history.back()
</script>