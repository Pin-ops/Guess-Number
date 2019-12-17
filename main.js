var guessMyNumber = alert('I have a secret number between 1-20. Do you want to guess it?')

// Make a random Number
var randomNumber = Math.floor(Math.random() * 20) + 1;

console.log(randomNumber);

// Give the user to decide how many times to try
var turns = parseInt(prompt('How many times do you want to try?'));


while (turns > 0) {
    // Take the users guesses
    guess = prompt("Tell me your guess.");

    // if the number is guessed, game is over
    if (guess == randomNumber) {
        turns--;
        alert("Congratulations, you won! The mystery number was " +
            randomNumber + ". You had " + this.turns + " more chances to guess it");
        break;
        // if the number is smaller, alerts the user
    } else if (guess < randomNumber) {
        turns--;
        alert("Your guess was too low. You have " +
            turns + " more chances. Think bigger 💪🏻");
        // if the number is bigger, alerts the user
    } else if (guess > randomNumber) {
        turns--;
        alert("Oppss! Your guess was too high but still have " +
            turns + " chances. Keep guessing!");
    }
    // if the number can not be guessed within the decided attempts, shows the number
    if (turns == 0) {
        alert("Unfortunately you have failed to guess. My secret number was " + randomNumber);
    }
}