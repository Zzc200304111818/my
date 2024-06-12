<template>
    <Header :title="title"></Header>
    <Footer></Footer>
</template>
<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import { ref, provide } from 'vue'
const active = ref('chat')
const title = ref('消息')
provide('active', active.value)
</script>