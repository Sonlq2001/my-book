<template>
	<div class="default-layout">
		<section class="default-sidebar">
			<SidebarComponent />
		</section>
		<div class="default-content">
			<section class="default-navbar">
				<NavbarComponent />
			</section>
			<section class="content">
				<h1 class="default-title">Dashboard</h1>
				<div class="content-page">
					<slot />
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import SidebarComponent from "@/components/Sidebar/SidebarComponent.vue";
import NavbarComponent from "@/components/Navbar/NavbarComponent.vue";
export default {
	name: "DefaultLayout",
	components: {
		SidebarComponent,
		NavbarComponent,
	},
};
</script>

<style></style>
