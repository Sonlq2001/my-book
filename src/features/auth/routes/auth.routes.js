import LoginScreen from "@/features/auth/screens/LoginScreen";

const AUTH_SCREEN = {
	path: "/login",
	name: "auth",
	component: LoginScreen,
	meta: {
		layout: "AuthLayout",
	},
};

export const AUTH_ROUTES = [AUTH_SCREEN];
