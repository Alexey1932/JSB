let start = checkCookie('modal');
let modal = document.querySelector('#subscribe-modal');
let modal_close = document.querySelector('.modal__close');

if (!start) {
	modal.classList.add('modal_active');
}

modal_close.addEventListener('click', () => {
	modal.classList.remove('modal_active');
	document.cookie = 'modal=close';
})

function checkCookie(name) {
	return document.cookie.split(';').some(cookie => cookie.trim().startsWith(name + '='));
}