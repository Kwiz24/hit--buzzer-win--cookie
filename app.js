startGame() {
    document.getElementById('start-game-button').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
}

hitBuzzer() {
    randomNumber = Math.random();
    winThreshold = 0.5;
    resultDisplay = document.getElementById('result');

    if (randomNumber > winThreshold) {
        resultDisplay.textContent = 'Congratulations! You win a cookie!';
    } else {
        resultDisplay.textContent = 'Sorry, you didn\'t win this time. Try again!';
    }
}


document.getElementById('start-game-button').addEventListener('click', startGame);
document.getElementById('buzzer').addEventListener('click', hitBuzzer);