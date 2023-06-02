let operationChoice;
let numberOne;
let numberTwo;

function insertNumbers(){
    numberOne =  Number.parseInt(prompt("Insert the first number:"));
    numberTwo = Number.parseInt(prompt("Insert the second number:"));
}

function addition() {
    insertNumbers();
    return numberOne + numberTwo;
}
function subtraction() {
    insertNumbers();
    return numberOne - numberTwo;
}
function multiplication() {
    insertNumbers();
    return numberOne * numberTwo;
}
function division() {
    insertNumbers();
    return numberOne / numberTwo;
}

do {

    operationChoice = Number.parseInt(prompt("Choose the operation from the menu below?\n\n1-Addition\n2-Subtraction\n3-Multiplication\n4-Division!\n5-Exit"));
    let result;

    switch (operationChoice) {
        case 1:
            result = addition();
            alert(result);
            break;
        case 2:
            result = subtraction();
            alert(result);
            break;
        case 3:
            result = multiplication();
            alert(result);
            break;
        case 4:
            result = division();
            alert(result);
            break;
        case 5:
            alert("See you soon!");
            break;
        default:
            alert("Please enter a valid number");
            break;
    }

} while (operationChoice != 5)


