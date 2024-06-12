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

const users = JSON.parse(localStorage.getItem('users'))
const handleSubmit = () => {
	e.value.username = e.value.password = '' // 重置错误消息  
	for (let i = 0; i < users.length; i++) {
		if (inputUsername.value === users[i].username) {
			if (inputPassword.value !== users[i].password) {
				e.value.password = '密码不正确'
			} else {
				showToast('登录成功')
				router.push('/home')
			}
		} else {
			e.value.username = '用户名不存在'
		}
	}
}  
</script>
