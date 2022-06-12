export const ROUTES = [
	{
		id: "home",
		path: "/",
		title: "Dashboard",
		icon: "fas fa-tachometer-alt",
		children: [
			{
				path: "/login",
				title: "auth",
			},
			{
				path: "/login",
				title: "1",
			},
		],
	},
	{
		id: "auth",
		path: "/",
		title: "Sách",
		icon: "fa-solid fa-book",
	},
];
