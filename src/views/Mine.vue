<template>
    <Header :title="title"></Header>
    <Footer></Footer>
</template>
<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import { ref, provide } from 'vue'
const active = ref('setting')
const title = ref('个人中心')
provide('active', active.value)
</script>