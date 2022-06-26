<template>
	<div class="group-box">
		<div class="box-header">
			<div class="box-title">{{ title }}</div>
		</div>
		<div class="box-body">
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
	},
};
</script>

<style scoped lang="scss">
.group-box {
	box-shadow: 0 0 1px #00000021, 0 1px 3px #00000033;
	border-radius: 5px;
	background-color: #fff;
}
.box-header {
	padding: 1.2rem 2rem;
	border-bottom: 1px solid #dee2e6;
}
.box-body {
	padding: 2rem;
}
</style>
