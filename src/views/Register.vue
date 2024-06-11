<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <van-nav-bar title="注册" class="page-nav-bar-register" />
            <van-field v-model="username" placeholder="请输入用户名（10位数字）" left-icon="manager" />
            <div v-if="e.username" class="error-message">{{ e.username }}</div>
            <van-field v-model="password" type="password" placeholder="请输入密码(不超过6位数字)" left-icon="lock" />
            <div v-if="e.password" class="error-message">{{ e.password }}</div>
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

const username = ref('')
const password = ref('')
const e = ref({
    username: '',
    password: ''
}) // 用于显示错误消息  
const router = useRouter() // 注入router实例  

const handleSubmit = () => {
    e.value.username = e.value.password = '' // 重置错误消息  

    if (username.value.length === 10 && password.value.length <= 6 && password.value.length > 0) {


        console.log('注册成功')

        localStorage.setItem('username', username.value)
        localStorage.setItem('password', password.value)
        router.push('/login')
    } else {
        if (username.value.length !== 10) {
            e.value.username = '用户名必须是10位数字'
        } else if (password.value.length > 6) {
            e.value.password = '密码不能超过6位数字'
        } else if (password.value === '') {
            e.value.password = '密码不能为空'
        }
    }
}  
</script>