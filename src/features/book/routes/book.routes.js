import BookBeing from "../screens/BookBeing/BookBeing.vue";
import BookPending from "../screens/BookPending/BookPending.vue";

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

export const BOOK_ROUTES = [BOOK_BEING, BOOK_PENDING];
