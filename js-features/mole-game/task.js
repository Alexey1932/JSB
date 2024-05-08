let deadCount = 0;
let lostCount = 0;

function shoot(index) {
	shootedHole = document.getElementById(`hole${index}`)
	return shootedHole
}

for (let i = 1; i <= 9; i++) {
	shoot(i).onclick = function () {
		if (shoot(i).classList.contains('hole_has-mole')) {
			deadCount++;
			document.getElementById('dead').textContent = deadCount;
			if (deadCount === 10) {
				deadCount = 0;
				document.getElementById('dead').textContent = deadCount;
				lostCount = 0;
				document.getElementById('lost').textContent = lostCount;
				alert('Молодец, живодер!')
			}
		}
		else {
			lostCount++;
			document.getElementById('lost').textContent = lostCount;
			if (lostCount === 5) {
				lostCount = 0;
				document.getElementById('lost').textContent = lostCount;
				deadCount = 0;
				document.getElementById('dead').textContent = deadCount;
				alert('Мазила!')
			}
		}
	}
}