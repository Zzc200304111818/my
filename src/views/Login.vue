<template>
	<div>
		<van-form>
			<van-nav-bar title="登录" class="page-nav-bar" />
			<van-field name="username" placeholder="请输入用户名" left-icon="manager" />
			<van-field type="password" name="password" placeholder="请输入密码" left-icon="lock" />
			<div style="margin: 16px">
				<van-button round block type="primary" native-type="submit"
					color="linear-gradient(to right, #3296fa, #7744ff)">
					登录
				</van-button>
			</div>
		</van-form>
	</div>
</template>

<script>
export default {}
</script>
