<template>
	<div class="auth-login">
		<div class="auth-deco"></div>
		<div class="auth-group">
			<form action="" class="auth-form" @submit.prevent="handleSubmitForm">
				<h1>Đăng nhập</h1>
				<div class="auth-box">
					<label for="">Email</label>
					<input type="text" placeholder="Email" v-model="dataForm.email" />
				</div>
				<div class="auth-box">
					<label for="">Mật khẩu</label>
					<input
						type="text"
						placeholder="Mật khẩu"
						v-model="dataForm.password"
					/>
				</div>
				<button class="btn auth-btn btn-primary">Đăng nhập</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			dataForm: {
				email: "",
				password: "",
			},
		};
	},

	methods: {
		handleSubmitForm() {
			console.log(this.dataForm);
		},
	},
};
</script>

<style></style>
