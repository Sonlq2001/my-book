import LoginScreen from "@/features/auth/screens/LoginScreen";

const AUTH_SCREEN = {
	path: "/login",
	name: "auth",
	component: LoginScreen,
	meta: {
		layout: "BlankLayout",
	},
};

export const AUTH_ROUTES = [AUTH_SCREEN];
