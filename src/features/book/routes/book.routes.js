import BookBeing from "../screens/BookBeing/BookBeing.vue";
import BookPending from "../screens/BookPending/BookPending.vue";
import BookAction from "../screens/BookAction/BookAction.vue";
import BooksRead from "../screens/BooksRead/BooksRead.vue";
import BookDetail from "../screens/BookDetail/BookDetail.vue";

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

const BOOKS_READ = {
	name: "books-read",
	path: "/books-read",
	component: BooksRead,
};

const BOOK_DETAIL = {
	name: "book-detail",
	path: "/book/:id",
	component: BookDetail,
};

export const BOOK_ROUTES = [
	BOOK_BEING,
	BOOK_PENDING,
	BOOK_ACTION,
	BOOKS_READ,
	BOOK_DETAIL,
];
