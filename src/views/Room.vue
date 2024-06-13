<template>

<HeaderButton :title="title"></HeaderButton>

<van-notice-bar left-icon="volume-o" :scrollable="false">
    <van-swipe
      vertical
      class="notice-swipe"
      :autoplay="3000"
      :touchable="false"
      :show-indicators="false"
    >
      <van-swipe-item>上厕所后及时冲水。</van-swipe-item>
      <van-swipe-item>凌晨后请勿发出声响。</van-swipe-item>
      <van-swipe-item>随手关灯关门。</van-swipe-item>
    </van-swipe>
  </van-notice-bar>

<van-cell-group inset>
  <van-cell title="静庐E栋" value="222寝室" />
  <van-cell title="寝室成员" value="谢磊" label="描述信息" />
</van-cell-group>

<van-contact-card type="add" @click="onAdd" />
<van-contact-card type="edit" name="张三" tel="13000000000" :editable="false" />



</template>
<script setup>
import HeaderButton from '@/components/HeaderButton.vue';
 import { ref } from 'vue';
 import { showToast } from 'vant';
 const title = ref('宿舍管理')
 const onAdd = () => showToast('新增');
 

</script>