<template>
    <HeaderButton :title="title"></HeaderButton>
    <van-grid clickable :column-num="2">
        <van-grid-item icon="wap-home-o" text="楼层管理" to="/management/floorManage" />
        <van-grid-item icon="shop-o" text="宿舍管理" url="/management/roomManage" />
        <van-grid-item icon="setting-o" text="报修" to="/DormitoryManagement/Repair" />
        <van-grid-item icon="cash-back-record-o" text="支出" to="/management/expend" />
        <van-grid-item icon="refund-o" text="收入" to="/" />
        <van-grid-item icon="records-o" text="用户反馈" to="/management/feedBack" />
    </van-grid>

</template>
<script setup>
import HeaderButton from '@/components/HeaderButton.vue'
import { ref } from "vue"

const title = ref('系统管理')

</script>