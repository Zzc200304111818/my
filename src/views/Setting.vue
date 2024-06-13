<template>
  <HeaderButton :title="title"></HeaderButton>
  <van-cell title="账号管理" is-link to="/mine/setting/accountManage" size="large" />
  <van-cell title="退出账号" @click="isTui" size="large" />
  <van-cell title="注销账号" @click="tiShi" size="large" />

</template>
<script setup>
import HeaderButton from '@/components/HeaderButton.vue'
import { useRouter } from 'vue-router'
import { showConfirmDialog, showToast } from 'vant'
import { ref } from 'vue'
const title = ref('设置')
const router = useRouter()

const tiShi = () => {
  showConfirmDialog({
    title: '确定要注销账号吗',
  })
    .then(() => {
      const users = JSON.parse(localStorage.getItem('users'))
      const username = sessionStorage.getItem('username')
      for (let i = 0; i < users.length; i++) {
        if (username === users[i].username) {
          users.splice(i, 1)
        }
      }
      localStorage.setItem('users', JSON.stringify(users))
      showToast('注销成功')
      router.push('/Login')
    })
    .catch(() => {
      // on cancel
      showToast('已取消')
    })
}
const isTui = () => {
  showConfirmDialog({
    title: '确定要退出登录吗',
  })
    .then(() => {
      showToast('退出成功')
      router.push('/Login')
    })
    .catch(() => {
      showToast('已取消')
    })
}
</script>