let scores = [0, 0];
let countScore = 0;
let currentPlayer = 0;
document.querySelector(".dice").style.display = "none";
document.getElementById("score-0").textContent = '0'
document.getElementById("score-1").textContent = '0'
document.getElementById("current-0").textContent = '0'
document.getElementById("current-1").textContent = '0'


document.querySelector(".btn-roll").addEventListener('click', function (){
	let dice = Math.floor(Math.random() * 6) + 1;
	let diceDOM = document.querySelector(".dice");
	diceDOM.style.display = "block";
	diceDOM.src = "dice-" + dice + ".png"
	if(dice > 1) {
		countScore += dice
		document.querySelector('#current-' + currentPlayer).textContent = countScore
	} else {
		nextPlayer();
	}

});

document.querySelector(".btn-hold").addEventListener('click', function (){
	scores[currentPlayer] += countScore;
	document.querySelector('#score-' + currentPlayer).textContent = scores[currentPlayer];
	if(scores[currentPlayer] >= 20) {
		alert("Player " + (currentPlayer + 1) + " is a winner")
		document.querySelector(".btn-roll").style.visibility = "hidden";
		document.querySelector(".btn-hold").style.visibility = "hidden";
		document.querySelector(".dice").style.visibility = "hidden";
		document.querySelector('.player-' + currentPlayer + "-panel").classList.remove("active");
	} else {
	nextPlayer();	
}

});

function nextPlayer() {
		currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
		countScore = 0;
		document.getElementById("current-0").textContent = '0';
		document.getElementById("current-1").textContent = '0';
		document.querySelector('.player-0-panel').classList.toggle("active");
		document.querySelector('.player-1-panel').classList.toggle("active");
		document.querySelector('.dice').style.display = "none";

};

document.querySelector(".btn-new").addEventListener('click', function(){
	location.reload();
});


























