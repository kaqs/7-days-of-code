const userName = prompt("Type your name:");
const age = prompt("Type you age:");
const progLang = prompt("Type the language you are studying:");
const msg = `"Hello ${userName}, you are ${age} year(s) old, and are already studying ${progLang}!"`;
alert(msg);

const survey = prompt ("Do you like to study" + progLang + "?" + "- Answer 1 for YES and 2 for NO!")

if (survey != 1 && survey != 2){
    alert("Please answer using the correct numbers")
    }
if (survey == 1){
    msg1 =  alert ("Very Good! Keep studying and you will achieve your goals.")
} 
if (survey == 2) {
    msg2 = alert ("Oh no...have you tried and study other languages?")
}