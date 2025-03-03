const startGameBtn = document.getElementById("startGame");
const result = document.getElementById("result");

startGameBtn.onclick = function() {
    let running = true;
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    while (running) {
        let userInput = window.prompt("Enter your guess (1-100) or 'quit'/'stop' to end:");
        
        // Check if user canceled the prompt
        if (userInput === null) {
            result.innerText = "Game canceled by user.";
            running = false;
            continue;
        }

        // Convert input to lowercase for consistency
        userInput = userInput.toLowerCase().trim();

        // Check if user wants to quit
        if (userInput === "quit" || userInput === "stop") {
            result.innerText = `Game ended. The number was ${randomNumber}.`;
            running = false;
            continue;
        }

        // Parse the guess
        const userGuess = parseInt(userInput);

        if (isNaN(userGuess)) {
            window.prompt("Please enter a valid number or 'quit'/'stop'!");
            continue;
        }

        if (userGuess < 1 || userGuess > 100) {
            window.prompt("Please enter a number between 1 and 100 or 'quit'/'stop'!");
            continue;
        }

        if (userGuess === randomNumber) {
            result.innerText = `Congratulations! You guessed the number ${randomNumber} correctly! Enter 'quit' or 'stop' to end, or guess again.`;
            randomNumber = Math.floor(Math.random() * 100) + 1; // Generate new number for next round
        } else if (userGuess < randomNumber) {
            window.prompt("Too low! Try a higher number.");
        } else {
            window.prompt("Too high! Try a lower number.");
        }
    }
};