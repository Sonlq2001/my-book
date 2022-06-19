<template>
	<div class="sidebar">
		<div class="sidebar-header">
			<span>MyBook</span>
		</div>
		<div class="sidebar-content">
			<div class="sidebar-auth">
				<img
					src="https://cdn.pixabay.com/photo/2022/06/05/13/44/girl-7244099__340.jpg"
					alt=""
					class="auth-img"
				/>
				<div class="auth-name">le quang son</div>
			</div>

			<div class="sidebar-search">
				<input type="text" class="input-search" placeholder="Search" />
				<button class="btn-search">
					<i class="fa-solid fa-magnifying-glass"></i>
				</button>
			</div>

			<nav class="sidebar-nav">
				<ul class="list-nav">
					<li v-for="menu in ROUTES" :key="menu.title" class="item-menu">
						<div
							v-if="menu.children && menu.children.length > 0"
							class="link-menu"
							:class="{ active: idMenu === menu.id }"
						>
							<div class="box-menu" @click="() => handleMenu(menu)">
								<div class="wrap-menu">
									<i :class="menu.icon"></i>
									<p>{{ menu.title }}</p>
								</div>
								<i class="icon-accordion fas fa-angle-left"></i>
							</div>
							<ul class="sub-menu">
								<li
									v-for="subMenu in menu.children"
									:key="subMenu.title"
									class="item-menu"
								>
									<router-link :to="subMenu.path" class="link-menu">
										<div class="box-menu">
											<i class="fa-solid fa-circle-dot"></i>
											<p>{{ subMenu.title }}</p>
										</div>
									</router-link>
								</li>
							</ul>
						</div>
						<router-link v-else :to="menu.path" class="link-menu">
							<div class="box-menu" @click="() => handleMenu(menu)">
								<div class="wrap-menu">
									<i :class="menu.icon"></i>
									<p>{{ menu.title }}</p>
								</div>
							</div>
						</router-link>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script>
import { ROUTES } from "@/routes/routes.constants";

export default {
	name: "SideBarComponent",
	data() {
		return {
			ROUTES,
			idMenu: null,
		};
	},
	methods: {
		handleMenu(value) {
			if (this.idMenu === value.id) {
				this.idMenu = null;
			} else {
				this.idMenu = value.id;
			}
		},
	},
};
</script>
