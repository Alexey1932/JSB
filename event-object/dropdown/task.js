const dropValue = document.getElementsByClassName('dropdown__value')[0];
console.log(dropValue);
const dropList = document.getElementsByClassName('dropdown__list')[0];
dropValue.addEventListener('click', () => {
	dropList.classList.add('dropdown__list_active');
})
const allListElements = dropList.getElementsByClassName('dropdown__item');
for (let i = 0; i < allListElements.length; i++) {
	allListElements[i].addEventListener('click', (event) => {
		dropValue.textContent = allListElements[i].textContent;
		dropList.classList.remove('dropdown__list_active');
		event.preventDefault();
	})
}
