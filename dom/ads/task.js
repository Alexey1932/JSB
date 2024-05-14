let list = Array.from(document.querySelectorAll('.rotator__case'));

function active() {
	let activeIndex = list.findIndex(i => i.classList.contains('rotator__case_active'));
	list.forEach(i => i.classList.remove('rotator__case_active'));
	activeIndex++;
	if (activeIndex > list.length - 1) {
		activeIndex = 0;
	}
	let activeCase = list[activeIndex];
	activeCase.classList.add('rotator__case_active');

	let color = activeCase.dataset.color;
	activeCase.style.color = color;

	let speed = parseInt(activeCase.dataset.speed);
	setTimeout(() => {
		active();
	}, speed);
}

active();