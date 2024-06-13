<template>
    <HeaderButton :title="title"></HeaderButton>
    <van-tabs v-model:active="activeName">
        <van-tab title="我要报修" name="a">


            <form @submit.prevent="handleSubmit">
                <van-field class="repair_fie"  v-model="phone" placeholder="联系电话" label="联系电话"/>
                <van-field v-model="fieldValue_xiaoqu" is-link readonly label="校区" placeholder="选择校区"
                    @click="showPicker_xiaoqu = true"  />
                <van-popup v-model:show="showPicker_xiaoqu" round position="bottom">
                    <van-picker :columns="columns_xiaoqu" @cancel="showPicker_xiaoqu = false"
                        @confirm="onConfirm_xiaoqu" />
                </van-popup>
                <van-field v-model="fieldValue_loudong" is-link readonly label="楼栋" placeholder="选择楼栋"
                    @click="showPicker_loudong = true" />
                <van-popup v-model:show="showPicker_loudong" round position="bottom">
                    <van-picker :columns="columns_loudong" @cancel="showPicker_loudong = false"
                        @confirm="onConfirm_loudong" />
                </van-popup>
                <van-field class="repair_fie" label="维修地点" v-model="posi" placeholder="输入楼层和房号详细信息" />
                <van-field class="repair_fie" label="报修内容" v-model="content" placeholder="报修内容" />
                <van-button type="primary" size="large"  native-type="submit">提交</van-button>
                <van-button type="primary" size="large" color="red" @click="repairDelete()">清空</van-button>
            </form>
        </van-tab>

        <van-tab title="我的报修" >
            <van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"

/>

        </van-tab>
    </van-tabs>


</template>
<script setup>
import HeaderButton from '@/components/HeaderButton.vue'
import { ref } from 'vue'
const title = ref('报修')

const phone = ref('')

const activeName = ref('b');

const columns_xiaoqu = [
    { text: '蛟桥', value: 'Jiaoqiao' },
    { text: '麦庐', value: 'Mailu' },
    { text: '枫桥', value: 'Fenglin' },
];
const fieldValue_xiaoqu = ref('');
const showPicker_xiaoqu = ref(false);

const onConfirm_xiaoqu = ({ selectedOptions }) => {
    showPicker_xiaoqu.value = false;
    fieldValue_xiaoqu.value = selectedOptions[0].text;
};
const columns_loudong = [
    { text: 'A', value: 'lou_A' },
    { text: 'B', value: 'lou_B' },
    { text: 'C', value: 'lou_C' },
    { text: 'D', value: 'lou_D' },
    { text: 'E', value: 'lou_E' },
];
const fieldValue_loudong = ref('');
const showPicker_loudong = ref(false);

const onConfirm_loudong = ({ selectedOptions }) => {
    showPicker_loudong.value = false;
    fieldValue_loudong.value = selectedOptions[0].text;
};

const posi=ref('')
const content=ref('')

const repair = ref(JSON.parse(localStorage.getItem('repair') || '[]'))

function handleSubmit() {
    repair.value.push({
    phone: phone.value,
    fieldValue_xiaoqu: fieldValue_xiaoqu.value,
    fieldValue_loudong: fieldValue_loudong.value,
    posi: posi.value,
    content:content.value
  })
  localStorage.setItem('repair', JSON.stringify(repair.value))
}
function repairDelete() {
    phone.value='';
    fieldValue_xiaoqu.value='';
    fieldValue_loudong.value='';
    posi.value='';
    content.value='';
}

</script>
<style>
</style>