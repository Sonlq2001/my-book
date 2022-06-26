import BookBeing from "../screens/BookBeing/BookBeing.vue";
import BookPending from "../screens/BookPending/BookPending.vue";
import BookAction from "../screens/BookAction/BookAction.vue";

const BOOK_BEING = {
	name: "book-being",
	path: "/book-being",
	component: BookBeing,
};

const BOOK_PENDING = {
	name: "book-pending",
	path: "/book-pending",
	component: BookPending,
};

const BOOK_ACTION = {
	name: "book-action",
	path: "/book-action",
	component: BookAction,
};

export const BOOK_ROUTES = [BOOK_BEING, BOOK_PENDING, BOOK_ACTION];
