<template>
    <van-nav-bar :title="title" class="page-nav-bar">
        <template #right>
            <van-icon name="location" size="18" @click="location" />
        </template>
    </van-nav-bar>

</template>
<script setup>
import { showToast } from 'vant'
const props = defineProps({
    title: String
})
function location() {
    showToast('location')
}
</script>