<template>
    <HeaderButton :title="title"></HeaderButton>
</template>
<script setup>
import HeaderButton from '@/components/HeaderButton.vue'
import { ref } from "vue"

const title = ref('任务栏')

</script>