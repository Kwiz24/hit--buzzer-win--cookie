document.addEventListener('DOMContentLoaded', () => {
    const startGameButton = document.querySelector('#welcome-button');
    const gameArea = document.querySelector('#game-area');
    const introContainer = document.querySelector('#intro-container');
    const buzzerButton = document.querySelector('#buzzer');

    startGameButton.addEventListener('click', () => {
        introContainer.style.opacity = '0';
        setTimeout(() => {
            introContainer.style.display = 'none';
            gameArea.style.display = 'block';
            gameArea.style.opacity = '1';
        }, 500);
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