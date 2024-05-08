let counter = 0;
let cookieClicker = document.getElementById('cookie');
cookieClicker.onclick = function(){
	counter++;
	if(cookieClicker.classList.contains('big')){
		cookieClicker.width /= 1.2;
		cookieClicker.classList.remove('big')
	}
	else{
		cookieClicker.width *= 1.2;
		cookieClicker.classList.add('big')
	}
	let clickerCounter = document.getElementById('clicker__counter');
	clickerCounter.textContent = counter;
}