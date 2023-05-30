const min = 0;
const max = 10;
let guess;
//let secretNumber = 7; //fixed number
let secretNumber = Math.floor(Math.random()*(max - min + 1) + min); //to get a random number
let attempts = 0;

while (guess != secretNumber && attempts < 3) {
    attempts++;
    guess = prompt(`"Please enter a number between ${min} and ${max}"`);
    if (guess == secretNumber) {
        alert(`"We have a winner! Congratulations, you got it right after ${attempts}"`);
    } else {
        alert(`"Incorrect! You still have ${3-attempts}"`);
    }
}
// approach using FOR statement
// for (let attempts = 0; attempts < 3; attempts++) {
//     guess = prompt(`"Please enter a number between ${min} and ${max}"`);
//     if (guess == secretNumber) {
//         alert(`"We have a winner! Congratulations, you got it right after ${attempts+1}"`);
//         break;
//     } else {
//         alert (`"Incorrect! You still have ${2-attempts}"`);
//     }
// } 

if (guess != secretNumber) {
    alert(`Unfortunely you have used all your three attempts! The number is ${secretNumber}`);
}



