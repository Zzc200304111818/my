<template>
  <Header :title="title"></Header>
  <van-row class="sendInfo">
    <van-col span="24" class="flex colorf topInfo p20">
      <!--左边头像部分-->
      <div class="content-left">
        <van-uploader ref="uploader" :after-read="handleAfterRead" :before-read="beforeRead" accept="image/*"
          class="arrart" :max-size="10240 * 1024" @oversize="onOversize">
          <img class="arrart" :src="iconUrl" alt="Avatar" />
          <!-- <van-tag type="danger" class="vip" size="medium">VIP</van-tag> -->
          <div class="personCompany">个人用户</div>
        </van-uploader>
      </div>
      <div class="content-right">
        <div>
          ٩(●̮̃•)۶用户
        </div>
        <div>༺{{ username }}༻</div>
      </div>

    </van-col>
  </van-row>
  <div>
    <van-cell-group>
      <van-cell title="我" icon="user-o" is-link to="/mine/mineMess" size="large" />
      <van-cell title="设置" icon="setting-o" is-link to="/mine/setting" size="large" />


    </van-cell-group>
  </div>
  <Footer></Footer>
</template>

<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import { ref, provide } from 'vue'
const active = ref('setting')
const title = ref('个人中心')
provide('active', active.value)
const username = sessionStorage.getItem('username')

const iconUrl = ref('https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg') // 用于存储图片的 DataURL    

// 处理文件读取后的逻辑  
const handleAfterRead = (file) => {
  const reader = new FileReader()
  reader.readAsDataURL(file.file)
  reader.onload = (e) => {
    // 将文件内容转化为DataURL  
    iconUrl.value = e.target.result
  }
}

// 文件读取前的处理（例如文件类型检查）  
const beforeRead = (file) => {
  // 你可以在这里添加额外的检查逻辑  
  // 例如，检查文件类型是否为图片  
  if (!file.type.startsWith('image/')) {
    vanToast('请上传图片文件')
    return false
  }
  return true
}

// 文件大小超过限制的处理  
const onOversize = (file, fileInfo) => {
  vanToast('文件大小不能超过 10MB')
  return false
}

// 假设的 toast 提示函数，你可以根据实际情况替换为 Vant 的 Toast 或其他 UI 库的提示组件  
const vanToast = (message) => {
  // 使用 Vant 的 Toast 组件或其他方式来显示消息  
  // 例如：Vant.Toast.fail(message);  
  console.log(message)
}
</script>
