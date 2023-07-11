'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent;
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 12;

const btnCheck = document.querySelector('.check');
const messageTab = document.querySelector('.message')
let secreatNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = secreatNumber;
const scoreBoard = document.querySelector('.score');
const rootElement = document.querySelector('body');
const btnAgain = document.querySelector('.again');
document.querySelector('.number').textContent = '?';
const highScore = document.querySelector('.highscore');
let highScoreRec = highScore.textContent;
let score = 20;


const commonMessage = function (message) {
	document.querySelector('.message').textContent = message;
}

btnCheck.addEventListener('click', function (evt) {
	evt.preventDefault();
	const guess = Number(document.querySelector('.guess').value);
	if (!guess) {
		commonMessage('😒 No Number');
	}
	// when player win
	else if (guess === secreatNumber) {
		commonMessage('🎉 Correct Guess');
		rootElement.style.backgroundColor = 'green';
		document.querySelector('.number').style.width = '30rem';
		document.querySelector('.number').textContent = secreatNumber;
		// highScoreRec++;
		console.log(score);
		if (highScoreRec < score) {
			highScoreRec = score;
		}
		highScore.textContent = highScoreRec;
		// console.log(highScoreRec);
		// console.log(highScore.textContent);
		// when guess to high
	} else if (guess !== secreatNumber) {
		if (score > 0) {
			messageTab.textContent = guess > secreatNumber ? '📉to high' : '📈to low';
			score--;
			scoreBoard.textContent = score;
		}
		else {
			commonMessage('👎 You are losing the Game');
		}
	};

	// else if (guess > secreatNumber) {
	// 	if (score > 0) {
	// 		messageTab.textContent = '📉to high';
	// 		score--;
	// 		scoreBoard.textContent = score;
	// 	}
	// 	else {
	// 		messageTab.textContent = '👎 You are losing the Game';
	// 	}
	// 	// when guess to low
	// } else if (guess < secreatNumber) {
	// 	if (score > 0) {
	// 		messageTab.textContent = '📈to low';
	// 		score--;
	// 		scoreBoard.textContent = score;
	// 	}
	// 	else {
	// 		messageTab.textContent = '👎 You are losing the Game';
	// 	}
	// }
});


btnAgain.addEventListener('click', function (evt) {
	evt.preventDefault();
	score = 20;
	document.querySelector('.number').textContent = '?';
	secreatNumber = Math.trunc(Math.random() * 20 + 1)
	console.log(secreatNumber);
	const guess = document.querySelector('.guess');
	messageTab.textContent = 'Start the game';
	scoreBoard.textContent = 0;
	guess.value = '';
	document.querySelector('.number').style.width = '15rem';
	rootElement.style.backgroundColor = '#222';
	// document.querySelector('.number').textContent = secreatNumber;
})