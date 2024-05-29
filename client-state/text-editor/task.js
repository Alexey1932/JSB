let editor = document.querySelector('#editor');
let btn = document.querySelector('#btn')

editor.addEventListener('input', () => {
	localStorage.setItem('text', editor.value)
})

if (localStorage.getItem('text')) {
	editor.value = localStorage.getItem('text')
}

btn.addEventListener('click', () => {
	localStorage.removeItem('text');
	editor.value = null;
})