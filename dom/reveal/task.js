let list = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
	list.forEach(el => {
		let { top, bottom } = el.getBoundingClientRect();
		if (bottom < 0 || top > window.innerHeight) {
			el.classList.remove('reveal_active')
		}
		else {
			el.classList.add('reveal_active')
		}
	});
})




