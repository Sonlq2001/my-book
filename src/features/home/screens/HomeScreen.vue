<template>
	<div>
		<div class="group-card">
			<CardData />
			<CardData />
			<CardData />
			<CardData />
		</div>
	</div>
</template>

<script>
import CardData from "../components/CardData/CardData.vue";
export default {
	name: "HomeScreen",
	components: {
		CardData,
	},
};
</script>

<style></style>
