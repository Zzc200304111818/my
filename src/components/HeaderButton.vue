<template>
    <van-nav-bar :title="title" class="page-nav-bar" left-text="返回" left-arrow @click-left="onClickLeft" />
</template>
<script setup>
const props = defineProps({
    title: String
})
const onClickLeft = () => history.back()
</script>