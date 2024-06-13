<template>
  <HeaderButton :title="title"></HeaderButton>
  <van-cell-group inset>
    <van-cell title="支出账单总计" :value="price" />

  </van-cell-group>

  <van-contact-card type="add" add-text="添加账单" @click="onAdd" />

</template>
<script setup>
import HeaderButton from '@/components/HeaderButton.vue'
import { ref } from "vue"
import { useRouter } from 'vue-router'
const router = useRouter()
const price = JSON.parse(localStorage.getItem('layers')).room + '寝室'

const onAdd = () => {
  router.push('/expend/expendList')
}
const title = ref('支出')

</script>