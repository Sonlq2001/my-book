export const ROUTES = [
	{
		id: "home",
		title: "Dashboard",
		icon: "fas fa-tachometer-alt",
		children: [
			{
				path: "/",
				title: "auth",
			},
			{
				path: "/login",
				title: "1",
			},
		],
	},
	{
		id: "book",
		title: "Sách",
		icon: "fa-solid fa-book",
		children: [
			{
				path: "/book-being",
				title: "Sách đang đọc",
			},
			{
				path: "/book-pending",
				title: "Sách nên đọc",
			},
			{
				path: "/book-read",
				title: "Sách đã đọc",
			},
		],
	},
];
