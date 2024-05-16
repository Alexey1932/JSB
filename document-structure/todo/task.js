let input = document.querySelector('#task__input');
let btn = document.querySelector('#tasks__add');
let list = document.querySelector('#tasks__list');

function add() {
	if (input.value !== '') {
		list.insertAdjacentHTML('afterBegin',
			`<div class="task">
			<div class= "task__title" >
			${input.value}
			</div>
			<a href="#" class="task__remove">&times;</a>
		</div > `)
	}
}

input.addEventListener('keydown', function (e) {
	if (e.key === 'Enter') {
		add()
		e.preventDefault();
	}
});

btn.addEventListener('click', function (e) {
	add()
	e.preventDefault();
});


list.addEventListener('click', function (e) {
	if (e.target.classList.contains('task__remove')) {
		e.target.closest('.task').remove();
	}
	e.preventDefault();
});