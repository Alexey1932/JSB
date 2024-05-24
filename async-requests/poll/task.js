let title = document.querySelector('.poll__title');
let items = document.querySelector('.poll__answers')
let xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
	if (xhr.readyState === xhr.DONE) {
		let answer = JSON.parse(xhr.responseText);
		console.log(answer);
		title.textContent = answer.data.title
		for (i of answer.data.answers) {
			items.insertAdjacentHTML('beforeend', `<button class="poll__answer">
			${i}
		 </button>`);
		}
		let result = Array.from(document.querySelectorAll('.poll__answer'));
		result.forEach(i => i.style.marginRight = '10px')
		result.forEach(i => i.addEventListener('click', () => {
			alert('Спасибо, ваш голос засчитан!')

		})
		)
	}
})
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

