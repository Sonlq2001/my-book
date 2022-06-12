<template>
	<div id="wrap">
		<AppLayout>
			<router-view />
		</AppLayout>
	</div>
</template>

<script>
export default {
	name: "App",
};
</script>

<style lang="scss">
@import "scss/main.scss";
</style>
