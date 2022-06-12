import * as VueRouter from "vue-router";

import { HOME_ROUTES } from "@/features/home/home";
import { AUTH_ROUTES } from "@/features/auth/auth";

const routes = [...HOME_ROUTES, ...AUTH_ROUTES];

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes,
});

export default router;
