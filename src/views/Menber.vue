<template>
    <HeaderButton :title="title"></HeaderButton>
    <van-cell-group inset>
      <van-cell title="静庐E栋" value="222寝室" />
      <van-cell title="寝室成员" value="谢磊" label="描述信息" />
    </van-cell-group>
    
    <van-contact-card type="add" @click="onAdd" />
    <van-contact-card type="edit" name="张三" tel="13000000000" :editable="false" />
</template>
<script setup>
import HeaderButton from '@/components/HeaderButton.vue'
import { ref } from "vue"
import { showToast } from 'vant';
const onAdd = () => showToast('新增');
const title = ref('我的舍友')

</script>