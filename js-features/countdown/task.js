let hours = 0;
let minutes = 0;
let seconds = 7;

document.getElementById('timer').textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);

function formatTime(time) {
	return time < 10 ? '0' + time : time;
}

let timerInterval = setInterval(() => {
	seconds--;
	if (seconds < 0 && minutes === 0 && hours > 0) {
		hours--;
		minutes = 59;
		seconds = 59;
	}
	if (seconds < 0 && minutes > 0) {
		minutes--;
		seconds = 59;
	}
	if (seconds === 0 && minutes === 0 && hours === 0) {
		clearInterval(timerInterval);
		alert('Вы выиграли!')
	}
	document.getElementById('timer').textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}, 1000);
