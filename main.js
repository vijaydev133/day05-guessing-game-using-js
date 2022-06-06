//Write a guessing game where the user has to guess a secret
// number. After every guess the program tells the user
// whether their number was too large or too small. At the
// end the number of tries needed should be printed. It
// counts only as one try if they input the same number
// multiple times consecutively.

let secretNumber = Math.floor(Math.random() * 100);
let count = 0;

let guessNumber = 0;

let lastGuess = 0;

while (guessNumber != secretNumber) {
  guessNumber = prompt("guess a number : ");
  if (guessNumber <= 0 || guessNumber >= 100) {
    alert("guess a number between 1 - 99");
  } else {
    if (guessNumber == lastGuess) {
      alert("you guessed the same number, guess different number");
    } else {
      count = count + 1;
      if (guessNumber > secretNumber) {
        alert("number is bigger, guess smaller");
      } else if (guessNumber < secretNumber) {
        alert("number is smaller, guess bigger");
      } else {
        break;
      }

      lastGuess = guessNumber;
    }
  }
}

document.write(`you guessed the secret number in ${count} guesses`);

// let num = Math.round((Math.random() * 100))

// console.log(num);
