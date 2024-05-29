let form = document.querySelector('#signin__form');
let signin = document.querySelector('#signin');
let welcome = document.querySelector('#welcome');
let userIdSpan = document.querySelector('#user_id');
let logoutBtn = document.querySelector('#logout__btn');


let storedUserId = localStorage.getItem('user_id');
if (storedUserId) {
	showWelcome(storedUserId);
}

form.addEventListener('submit', (event) => {
	event.preventDefault();

	let formData = new FormData(form);

	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

	xhr.onreadystatechange = () => {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200 || xhr.status === 201) {
				let response = JSON.parse(xhr.responseText);
				console.log(response);
				if (response.success) {
					localStorage.setItem('user_id', response.user_id);
					showWelcome(response.user_id);
				} else {
					alert('Неверный логин/пароль');
				}
			} else {
				console.error('Ошибка: ' + xhr.status);
			}

			form.reset();
		}
	};


	xhr.send(formData);
});

logoutBtn.addEventListener('click', () => {
	localStorage.removeItem('user_id');
	showSignin();
});

function showWelcome(userId) {
	signin.classList.remove('signin_active');
	welcome.classList.add('welcome_active');
	userIdSpan.textContent = userId;
}

function showSignin() {
	welcome.classList.remove('welcome_active');
	signin.classList.add('signin_active');
	userIdSpan.textContent = '';
}