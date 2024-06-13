<template>
    <HeaderButton :title="title"></HeaderButton>
    <van-cell-group inset>
      <van-cell title="支出账单总计" value="222寝室" />
      
    </van-cell-group>
    
    <van-contact-card type="add" @click="onAdd" />
 
</template>
<script setup>
import HeaderButton from '@/components/HeaderButton.vue'
import { ref } from "vue"
import { showToast } from 'vant';
import { useRouter } from 'vue-router';
const router = useRouter()


const onAdd= () => {
  showToast('新增');
    router.push('/expend/expendList')
}
const title = ref('支出')

</script>