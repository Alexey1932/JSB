let loader = document.querySelector('.loader');
let arr = [];
let items = document.querySelector('#items')
let xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
	if (xhr.readyState === xhr.DONE) {
		let answer = JSON.parse(xhr.responseText);
		loader.classList.remove('loader_active');
		reander(answer)
	}
})
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

function reander(answer) {
	for (i in answer.response.Valute) {
		arr.push(answer.response.Valute[i])
	}
	arr.forEach(i => {
		let code = `
		<div class="item__code">
			Валюта: ${i.CharCode}
		</div>
		<div class="item__value">
		Курс: ${i.Value}
		</div>
		<div class="item__currency">
			руб.
		</div>`;
		items.insertAdjacentHTML('beforeend', code);
	})
}
console.log(arr)
