<template>
  <HeaderButton :title="title"></HeaderButton>

  <van-notice-bar left-icon="volume-o" :scrollable="false">
    <van-swipe vertical class="notice-swipe" :autoplay="3000" :touchable="false" :show-indicators="false">
      <van-swipe-item>上厕所后及时冲水。</van-swipe-item>
      <van-swipe-item>凌晨后请勿发出声响。</van-swipe-item>
      <van-swipe-item>随手关灯关门。</van-swipe-item>
    </van-swipe>
  </van-notice-bar>



  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-cell-group inset>
        <van-cell :title="address" :value="room" />
        <van-cell title="寝室成员" :value="username" />
      </van-cell-group>
      <van-field v-model="stuoNo" name="室友学号" label="室友学号" placeholder="室友学号"
        :rules="[{ required: true, message: '请填写室友学号' }]" />
      <van-field v-model="name" name="室友姓名" label="室友姓名" placeholder="室友姓名"
        :rules="[{ required: true, message: '请填写室友姓名' }]" />
      <van-field v-model="phoneNumber" name="电话号码" label="电话号码" placeholder="电话号码"
        :rules="[{ required: true, message: '请填写电话号码' }]" />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        添加
      </van-button>
    </div>
  </van-form>
</template>
<script setup>
import HeaderButton from "@/components/HeaderButton.vue"
import { ref } from "vue"
import { showConfirmDialog, showToast } from 'vant'
const title = ref("宿舍管理")
const stuoNo = ref("")
const name = ref("")
const phoneNumber = ref("")
const temp = JSON.parse(localStorage.getItem('layers'))
const address = temp.campus + temp.builds + temp.build + '栋'
const room = temp.room + '寝室'
function getUsername() {
  const username = sessionStorage.getItem('username')
  if (username) {
    const usersString = localStorage.getItem('users')
    if (usersString) {
      try {
        const users = JSON.parse(usersString)
        if (Array.isArray(users)) {
          for (let i = 0; i < users.length; i++) {
            if (username === users[i].username) {
              return users[i].name
            }
          }
        }
      } catch (error) {
        console.error('Error parsing users from localStorage:', error)
      }
    }
  }
}
const username = getUsername()
const menbers = JSON.parse(localStorage.getItem('menbers') || '[]')
const onSubmit = (values) => {
  showConfirmDialog({
    title: '是否添加',

  })
    .then(() => {
      menbers.push({
        stuNo: stuoNo.value,  //学号  
        phoneNumber: phoneNumber.value,
        name: name.value    //姓名  
      })

      localStorage.setItem('menbers', JSON.stringify(menbers))
      stuoNo.value = phoneNumber.value = name.value = ''
      showToast('添加成功')
    })
    .catch(() => {
      // on cancel
      showToast('提交失败')
    })
};

</script>