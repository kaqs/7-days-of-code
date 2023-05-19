let userName = prompt("Le's start! What's your name:");
let area = prompt(`"Hello ${userName}! Welcome to the programming game! Do you want to go to the Front-End or Back-End area?"`);

let language;

if (area.toLowerCase() === "front-end") {
    language = prompt("Would you like to learn React or Vue?");
} else if (area.toLowerCase() === "back-end") {
    language = prompt("Would you like to learn C# or Java?");
} else {
    alert("Invalid Answer. Please enter 'Front-End' or 'Back-End'.");
}

let question = prompt(`"Awesome! Would you like to specialise in ${area} or become a Fullstack developer?"`);


if (question.toLowerCase() === "specialise") {
    alert(`Keep up with the good work in ${language}, ${area}`);
} else if (question.toLowerCase() === "fullstack") {
    alert(`Great! You will be a well-rounded developer in no time`)
} else {
    alert("Invalid answer. Please choose between specialise or Fullstack.")
    throw new Error("Invalid answer.")
}


let repeat = "";
do {
    let technologies = []; // Create an empty array
    let continueLearning = true;

    while (continueLearning) {
        let newTech = prompt("What technology would you like to learn? (min of 3)");
        const techList = newTech.split(', ');
        technologies = technologies.concat(techList);

        if (technologies.length < 3) {
            alert(`You listed only ${technologies.length}. You still need to list ${3 - technologies.length} more.`);
        }

        if (technologies.length >= 3) {
            let answer = prompt(`You listed ${technologies.length}. Is there any other technology you'd like to learn about? (yes or no)`);
            if (answer === "no") {
                continueLearning = false; // Stop the loop if answer is "no"
            }
        }
    }

    alert("Congratulations on learning these new technologies: \n" + technologies.join("\n"));

    repeat = prompt("If you would like to repeat the questions please type 'Yes'. If you are happy with your answers please type 'No'");
    if (repeat.toLowerCase() === "no") {
        alert("Thank you for your time!");
    }
} while (repeat.toLowerCase() === "yes");
