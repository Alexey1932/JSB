let hasTooltips = Array.from(document.querySelectorAll('.has-tooltip'));
let tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
document.body.appendChild(tooltip);

hasTooltips.forEach(i => i.addEventListener('click', function (e) {
	tooltip.classList.remove('tooltip_active');
	tooltip.textContent = i.title;

	let place = i.getBoundingClientRect();
	tooltip.style.left = place.left + 'px';
	tooltip.style.top = place.top + 20 + 'px'

	tooltip.classList.add('tooltip_active');

	e.preventDefault();
}))









