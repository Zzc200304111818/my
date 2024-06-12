<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <van-nav-bar title="注册" class="page-nav-bar-register" />
            <van-field v-model="username" placeholder="请输入用户名（10位数字）" left-icon="manager" />
            <div v-if="error.username" class="error-message">{{ error.username }}</div>
            <van-field v-model="password" type="password" placeholder="请输入密码(不超过6位数字)" left-icon="lock" />
            <div v-if="error.password" class="error-message">{{ error.password }}</div>
            <div style="margin: 16px">
                <van-button round block type="primary" class="gradient-button" native-type="submit">
                    注册
                </van-button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
const username = ref('')
const password = ref('')
const error = ref({
    username: '',
    password: ''
}) // 用于显示错误消息  
const router = useRouter() // 注入router实例  

// 初始化用户列表，如果localStorage中没有则默认为空数组  
const users = ref(JSON.parse(localStorage.getItem('users') || '[]'))

const handleSubmit = () => {
    error.value.username = '' // 重置错误消息  
    error.value.password = ''
    for (let i = 0; i < users.value.length; i++) {
        if (users.value[i].username === username.value) {
            error.value.username = '用户名已存在'
            return
        }
    }
    // 验证用户名和密码  
    if (username.value.length !== 10) {
        error.value.username = '用户名必须是10位数字'
    } else if (password.value.length > 6) {
        error.value.password = '密码不能超过6位数字'
    } else if (password.value === '') {
        error.value.password = '密码不能为空'
    } else {
        // 验证通过，添加新用户到用户列表  
        users.value.push({
            username: username.value,
            password: password.value,
            stuNo: '',  //学号  
            sex: '',
            name: ''    //姓名  
        })

        // 将用户列表转换回JSON字符串并保存到localStorage  
        localStorage.setItem('users', JSON.stringify(users.value))
        showToast('注册成功')
        router.push('/login')
    }
}  
</script>