let userName = document.getElementById("userName");
let age = document.getElementById("age");
let progLang = document.getElementById("progLang");

function greetingMsg(){  
     let msg = `"Hello ${userName.value}, you are ${age.value} year(s) old, and are studying ${progLang.value}!"`;
     let survey = `"Do you like to study ${progLang.value}?" - Answer 1 for YES and 2 for NO!` + 
     `<br><br><input type="text" id='answerSurvey' placeholder="Type your answer"><br>`+
     `<br><button type="number"  id="send2" onclick="mySurvey()">Send</button>`;

     document.getElementById("greetings").innerHTML = msg;
     document.getElementById("survey").innerHTML = survey;  
}

function mySurvey(){
     let answer = document.getElementById("answerSurvey").value;
     if (answer == 1){
     document.getElementById("msgSurvey").innerHTML =  "Very Good! Keep studying and you will achieve your goals."
 }
     if(answer == 2){
     document.getElementById("msgSurvey").innerHTML ="Oh no...have you tried and study other languages?"
 } if (answer != 1 && answer !=2) {
     alert("Please answer using the correct numbers")
     }
}

//document.getElementById("send").disabled = true;

// if (progLang.value !== null && progLang.value !== "") {
//      document.getElementById("send").disabled = false;
//    } else {
//      document.getElementById("send").disabled = true;
//    }


