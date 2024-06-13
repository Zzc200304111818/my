<template>
  <HeaderButton :title="title"></HeaderButton>
  <van-notice-bar left-icon="volume-o" :scrollable="false">
    <van-swipe vertical class="notice-swipe" :autoplay="3000" :touchable="false" :show-indicators="false">
      <van-swipe-item>楼道内请勿抽烟。</van-swipe-item>
      <van-swipe-item>安全通道口请勿堆放杂物。</van-swipe-item>
      <van-swipe-item>12点后楼层断电。</van-swipe-item>
    </van-swipe>
  </van-notice-bar>
  <van-form @submit="handleSubmit">
    <van-field v-model="campus" is-link readonly name="picker" label="校区：" placeholder="点击选择校区"
      @click="showPickerHandler('campus')" />
    <van-field v-model="builds" is-link readonly name="picker" label="楼区：" placeholder="点击选择楼区"
      @click="showPickerHandler('builds')" />
    <van-field v-model="build" is-link readonly name="picker" label="楼号：" placeholder="点击选择楼号"
      @click="showPickerHandler('build')" />
    <van-field v-model="layer" is-link readonly name="picker" label="楼层：" placeholder="点击选择楼层"
      @click="showPickerHandler('layer')" />
    <van-field v-model="room" label="寝室号：" placeholder="请输入寝室号" :rules="[{ required: true, message: '请填写寝室号' }]" />
    <van-popup v-model:show="showPicker.show" position="bottom">
      <van-picker :columns="showPicker.columns" @confirm="onConfirm"
        @cancel="showPicker = { show: false, columns: [] }" />
    </van-popup>

    <van-button type="primary" block native-type="submit">提交</van-button>
  </van-form>

</template>
<script setup>
import { ref } from "vue"
import { showConfirmDialog, showToast } from 'vant'
import HeaderButton from "@/components/HeaderButton.vue"
const title = ref("楼层管理")
const campus = ref('')    //校区
const builds = ref('')    //楼区
const build = ref('')     //楼号
const layer = ref('')     //楼层
const room = ref('')
const showPicker = ref({ show: false, columns: [] })
const columnList = [
  [
    { text: "蛟桥园", value: '1' },
    { text: "枫林园", value: '2' },
    { text: "麦庐园", value: '3' },
  ],
  [
    { text: "宁庐", value: '1' },
    { text: "祥庐", value: '2' },
    { text: "和庐", value: '3' },
    { text: "静庐", value: '4' }
  ],
  [
    { text: "A", value: '1' },
    { text: "B", value: '2' },
    { text: "C", value: '3' },
    { text: "D", value: '4' },
    { text: "E", value: '5' }
  ],
  [
    { text: "1", value: '1' },
    { text: "2", value: '2' },
    { text: "3", value: '3' },
    { text: "4", value: '4' },
    { text: "5", value: '5' },
    { text: "6", value: '6' }
  ]
]
const showPickerHandler = (type) => {
  showPicker.value = {
    show: true,
    columns: columnList[type === 'campus' ? 0 : type === 'builds' ? 1 : type === 'build' ? 2 : 3]
  }
}

const onConfirm = ({ selectedOptions }) => {
  if (Array.isArray(showPicker.value.columns) && showPicker.value.columns.length > 0) {
    // 假设 selectedOptions[0] 是用户选择的选项  
    const selectedText = selectedOptions[0]?.text

    // 检查用户是否选择了某个选项  
    if (selectedText) {
      // 根据当前显示的列（通过 showPicker.value.columns）来确定应该更新哪个响应式引用  
      switch (showPicker.value.columns[0].text) {
        case '蛟桥园':
        case '枫林园':
        case '麦庐园':
          campus.value = selectedText
          break
        case '宁庐':
        case '祥庐':
        case '和庐':
        case '静庐':
          builds.value = selectedText
          break
        case 'A':
        case 'B':
        case 'C':
        case 'D':
        case 'E':
          build.value = selectedText
          break
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
          layer.value = selectedText
          break
      }
    }
  }

  // 无论是否找到对应的项，都关闭 picker  
  showPicker.value = { show: false, columns: [] }
}

const handleSubmit = () => {
  showConfirmDialog({
    title: '是否提交',

  })
    .then(() => {
      const layers = {
        campus: campus.value,
        builds: builds.value,
        build: build.value,
        layer: layer.value,
        room: room.value
      }
      localStorage.setItem('layers', JSON.stringify(layers))
      showToast('提交成功')
    })
    .catch(() => {
      showToast('提交失败')
    })

}  
</script>
