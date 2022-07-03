<template>
	<section class="call-out">
		<div class="call-out-title">
			<h5>
				<i class="fas fa-info"></i>
				<span>Note:</span>
			</h5>
			<p>
				<em> {{ title }}</em>
			</p>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		title: String,
	},
};
</script>

<style></style>
