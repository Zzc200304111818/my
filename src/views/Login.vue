<template>
	<div>
		<form @submit.prevent="handleSubmit">
			<van-nav-bar title="登录" class="page-nav-bar" />
			<van-field placeholder="请输入用户名" left-icon="manager" v-model="inputUsername" />
			<div v-if="e.username" class="error-message">{{ e.username }}</div>
			<van-field type="password" placeholder="请输入密码" left-icon="lock" v-model="inputPassword" />
			<div v-if="e.password" class="error-message">{{ e.password }}</div>
			<div style="margin: 16px">
				<van-button round block type="primary" native-type="submit"
					color="linear-gradient(to right, #3296fa, #7744ff)">
					登录
				</van-button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { showToast } from 'vant'

const inputUsername = ref('')
const inputPassword = ref('')
const e = ref({
	username: '',
	password: ''
}) // 用于显示错误消息  
const router = useRouter() // 注入router实例  

const handleSubmit = () => {
	e.value.username = '' // 重置用户名错误消息  
	e.value.password = '' // 重置密码错误消息  

	const users = JSON.parse(localStorage.getItem('users')) || [] // 确保users是一个数组  
	let userFound = false // 标记是否找到了用户  

	for (let i = 0; i < users.length; i++) {
		if (inputUsername.value === users[i].username) {
			userFound = true // 找到了用户  
			if (inputPassword.value !== users[i].password) {
				e.value.password = '密码不正确' // 仅在密码不匹配时设置密码错误消息  
				break // 不需要继续检查其他用户  
			} else {
				showToast('登录成功')
				sessionStorage.setItem('username', users[i].username)
				router.push('/home')
				break // 登录成功，跳出循环  
			}
		}
	}

	if (!userFound) {
		e.value.username = '用户名不存在' // 遍历完所有用户后，如果没有找到匹配的用户名，则显示错误消息  
	}
}  
</script>
