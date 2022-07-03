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
				icon: "fa-solid fa-spinner",
			},
			{
				path: "/book-pending",
				title: "Sách nên đọc",
				icon: "fa-solid fa-heart",
			},
			{
				path: "/books-read",
				title: "Sách đã đọc",
				icon: "fa-solid fa-list-check",
			},
		],
	},
];
