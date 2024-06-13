<template>
    <HeaderTwoButton :title="title"></HeaderTwoButton>
</template>
<script setup>
import HeaderTwoButton from '@/components/HeaderTwoButton.vue'
import { ref } from "vue"

const title = ref('任务栏')

</script>