<template>
	<div>
		<van-nav-bar title="登录" class="page-nav-bar" />
		<van-field name="username" placeholder="请输入用户名" />
		<van-field type="password" name="password" placeholder="请输入密码" />
		<div style="margin: 16px">
			<van-button round block type="primary" native-type="submit">
				提交
			</van-button>
		</div>
	</div>
</template>

<script>
	export default {}
</script>
