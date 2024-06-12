<template>
    <Header :title="title"></Header>
    <div id="Mine_div_1">
      <van-cell-group>
        <van-cell title="我" icon="user-o" is-link to="/mine/mineMess" size="large" />
        <van-cell title="设置"  is-link to="/mine/setting" size="large"  />
        

      </van-cell-group>
    </div>

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
<style>

</style>
