// Function to start the game
function startGame() {
    document.getElementById('start-game-button').style.display = 'none'; // Hide the start button
    document.getElementById('game-area').style.display = 'block'; // Show the game area
}

// Function to handle the buzzer click
function hitBuzzer() {
    var randomNumber = Math.random(); // Generate a random number
    var winThreshold = 0.5; // Set a threshold for winning
    var resultDisplay = document.getElementById('result');

    if (randomNumber > winThreshold) {
        resultDisplay.textContent = 'Congratulations! You win a cookie!';
    } else {
        resultDisplay.textContent = 'Sorry, you didn\'t win this time. Try again!';
    }
}

// Add event listeners
document.getElementById('start-game-button').addEventListener('click', startGame);
document.getElementById('buzzer').addEventListener('click', hitBuzzer);