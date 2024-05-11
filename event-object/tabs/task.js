tabs = Array.from(document.querySelectorAll('.tab'));
tabsContent = Array.from(document.querySelectorAll('.tab__content'));
for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener('click', () => {
		tabs.forEach(function (element) {
			element.classList.remove('tab_active');
		});
		tabsContent.forEach(function (element) {
			element.classList.remove('tab__content_active');
		});
		tabs[i].classList.add('tab_active')
		tabsContent[i].classList.add('tab__content_active')
	})
}