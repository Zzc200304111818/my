<template>
    <HeaderButton :title="title"></HeaderButton>
    <van-tabs>
        <van-tab title="我要报修">


            <form @submit.prevent="handleSubmit">
                <van-field v-model="phone" placeholder="联系电话" label="联系电话" />
                <van-field v-model="fieldValue_xiaoqu" is-link readonly label="校区" placeholder="选择校区"
                    @click="showPicker_xiaoqu = true" />
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
                <van-field label="维修地点" v-model="position" placeholder="输入楼层和房号详细信息" />
                <van-field label="报修内容" v-model="content" placeholder="报修内容" />
                <van-button type="primary" size="large" native-type="submit">提交</van-button>
                <van-button type="primary" size="large" color="red" @click="repairDelete()">清空</van-button>
            </form>
        </van-tab>

        <van-tab title="我的报修">
            <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <van-card v-for="(item, index) in list" :key="index" :num="item.time" :desc="item.desc"
                    :title="item.address" thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
                    :tag="item.tag" />
            </van-list>
        </van-tab>
    </van-tabs>


</template>
<script setup>
import HeaderButton from '@/components/HeaderButton.vue'
import { showToast, showConfirmDialog } from 'vant'
import { ref } from 'vue'
const title = ref('报修')

const phone = ref('')


const columns_xiaoqu = [
    { text: '蛟桥园', value: 'Jiaoqiao' },
    { text: '麦庐园', value: 'Mailu' },
    { text: '枫桥园', value: 'Fenglin' },
]
const fieldValue_xiaoqu = ref('')
const showPicker_xiaoqu = ref(false)

const onConfirm_xiaoqu = ({ selectedOptions }) => {
    showPicker_xiaoqu.value = false
    fieldValue_xiaoqu.value = selectedOptions[0].text
}
const columns_loudong = [
    { text: 'A栋', value: 'lou_A' },
    { text: 'B栋', value: 'lou_B' },
    { text: 'C栋', value: 'lou_C' },
    { text: 'D栋', value: 'lou_D' },
    { text: 'E栋', value: 'lou_E' },
]
const fieldValue_loudong = ref('')
const showPicker_loudong = ref(false)

const onConfirm_loudong = ({ selectedOptions }) => {
    showPicker_loudong.value = false
    fieldValue_loudong.value = selectedOptions[0].text
}

const position = ref('')
const content = ref('')

const repairs = ref(JSON.parse(localStorage.getItem('repairs') || '[]'))

function handleSubmit() {
    showConfirmDialog({
        title: '是否报修',

    })
        .then(() => {
            repairs.value.push({
                phone: phone.value,
                fieldValue_xiaoqu: fieldValue_xiaoqu.value,
                fieldValue_loudong: fieldValue_loudong.value,
                position: position.value,
                content: content.value
            })
            localStorage.setItem('repairs', JSON.stringify(repairs.value))
            showToast('报修成功')
        })
        .catch(() => {
            showToast('报修失败')
        })

}
function repairDelete() {
    phone.value = ''
    fieldValue_xiaoqu.value = ''
    fieldValue_loudong.value = ''
    position.value = ''
    content.value = ''
}
const currentPage = ref(1)
const list = ref([])
const loading = ref(false)
const finished = ref(false)
const onLoad = () => {
    setTimeout(() => {
        const start = (currentPage.value - 1) * 5 // 假设每页显示5个任务  
        const end = start + 5 // 或者使用 Math.min(start + 5, repairs.value.length) 来确保不会超出任务数组的长度  

        for (let i = start; i < end && i < repairs.value.length; i++) {
            const taskObj = {
                time: "联系电话：" + repairs.value[i].phone,
                address: "报修地点：" + repairs.value[i].fieldValue_xiaoqu + repairs.value[i].fieldValue_loudong + repairs.value[i].position,
                desc: "报修描述：" + repairs.value[i].content,
                tag: `报修请求${i + 1}` // 如果你想要的是全局的任务序号，而不是当前页的任务序号  
                // 如果你想要的是当前页的任务序号，可以使用 `任务${i - start + 1}`  
            }
            list.value.push(taskObj)
        }

        loading.value = false

        if (list.value.length >= repairs.value.length) {
            finished.value = true
        }

        currentPage.value++ // 更新页码，以便下次加载下一页的数据  
    }, 1000)
}
</script>
<style></style>