<template>
    <div>
        <van-form>
            <van-nav-bar title="注册" class="page-nav-bar-register" />
            <van-field name="username" placeholder="请输入用户名" left-icon="manager" />
            <van-field type="password" name="password" placeholder="请输入密码" left-icon="lock" />
            <div style="margin: 16px">
                <van-button round block type="primary" native-type="submit"
                    color="linear-gradient(to right, #ff6034, #ee0a24)">
                    注册
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script setup>

</script>
