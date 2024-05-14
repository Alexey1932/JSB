let list = Array.from(document.querySelectorAll('.font-size'));
let book = document.querySelector('.book');

list.forEach(el => el.addEventListener('click', function (e) {
	let active = document.querySelector('.font-size_active');
	active.classList.remove('font-size_active');
	el.classList.add('font-size_active')
	if (el.classList.contains('font-size_small')) {
		book.classList.remove('book_fs-big');
		book.classList.add('book_fs-small');
	}
	else if (el.classList.contains('font-size_big')) {
		book.classList.remove('book_fs-small');
		book.classList.add('book_fs-big');
	}
	else {
		book.classList.remove('book_fs-small');
		book.classList.remove('book_fs-big');
	}

	e.preventDefault();
}))