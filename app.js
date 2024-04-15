document.addEventListener('DOMContentLoaded', () => {
    const startGameButton = document.querySelector('#start-game-button');
    const gameArea = document.querySelector('#game-area');
    const buzzerButton = document.querySelector('#buzzer');

    startGameButton.addEventListener('click', () => {
        startGameButton.style.display = 'none';
        gameArea.style.display = 'block';
    });

    buzzerButton.addEventListener('click', () => {
        const randomNumber = Math.random();
        const winThreshold = 0.5;
        const resultDisplay = document.querySelector('#result');

        if (randomNumber > winThreshold) {
            resultDisplay.textContent = 'Congratulations! You win a cookie!';
        } else {
            resultDisplay.textContent = 'Sorry, you didn\'t win this time. Try again!';
        }
    });
});

