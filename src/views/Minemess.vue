<template>
    <HeaderButton :title="title"></HeaderButton>
    <van-cell-group>
        <van-field v-model="user.phoneNumber" placeholder="请输入联系方式" label="联系方式" />
        <van-field v-model="user.stuNo" type="number" placeholder="请输入学号" label="学号" />
        <van-field v-model="user.sex" placeholder="请输入性别" label="性别" clearable />
        <van-field v-model="user.name" placeholder="请输入姓名" label="姓名" clearable />
        <!-- 添加一个保存按钮，用于提交更新后的信息 -->
        <van-button round block type="primary" @click="saveUser">保存</van-button>
    </van-cell-group>
</template>

<script setup>
import HeaderButton from '@/components/HeaderButton.vue'
import { ref, onMounted, reactive } from 'vue'

const title = ref('我的信息')
const user = reactive({
    username: '',
    phoneNumber: '',
    stuNo: '',
    sex: '',
    name: ''
})

onMounted(() => {
    const username = sessionStorage.getItem('username')
    if (username) {
        const usersString = localStorage.getItem('users')
        if (usersString) {
            try {
                const users = JSON.parse(usersString)
                if (Array.isArray(users)) {
                    for (let i = 0; i < users.length; i++) {
                        if (username === users[i].username) {
                            user.username = users[i].username
                            user.phoneNumber = users[i].phoneNumber
                            user.stuNo = users[i].stuNo
                            user.sex = users[i].sex
                            user.name = users[i].name
                            break
                        }
                    }
                }
            } catch (error) {
                console.error('Error parsing users from localStorage:', error)
            }
        }
    }
})

const saveUser = () => {
    const username = sessionStorage.getItem('username')
    if (username) {
        const usersString = localStorage.getItem('users')
        if (usersString) {
            try {
                const users = JSON.parse(usersString)
                if (Array.isArray(users)) {
                    for (let i = 0; i < users.length; i++) {
                        if (username === users[i].username) {
                            // 更新用户信息  
                            users[i].phoneNumber = user.phoneNumber
                            users[i].stuNo = user.stuNo
                            users[i].sex = user.sex
                            users[i].name = user.name

                            // 存储更新后的users到localStorage  
                            localStorage.setItem('users', JSON.stringify(users))
                            // 跳出循环，因为我们已经找到了并更新了用户  
                            break
                        }
                    }
                }
            } catch (error) {
                console.error('Error parsing users from localStorage:', error)
            }
        }
    }
}
</script>