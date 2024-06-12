<template>
    <van-nav-bar :title="title" class="page-nav-bar" />
</template>
<script setup>
const props = defineProps({
    title: String
})
</script>