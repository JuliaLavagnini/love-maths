document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");
});


/**
 * Tha main game 'loop', called when the script is first loaded 
 * and after the user's answrr has been processed
 */
function runGame(gameType) {
    //Generate two numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

<<<<<<< HEAD
    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
=======
    if (gameType === "addition"){
        displayAdditionQuestion(num1,num2);
    } else if(gameType === "subtraction"){
      displaySubtractQuestion(num1, num2);
    } else{
>>>>>>> 3912fc3561b2bef5957563ca3056736546fb495d
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * Checks the answer against the first element in 
 * the returned calculateCorrectAnswer array.
 */
function checkAnswer() {
    let userAsnwer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAsnwer === calculatedAnswer[0];

    if (isCorrect) {
        alert(`THAT'S RIGHT :D!!!}`);
        incrementScore();
    } else {
        alert(`Sorry wrong answer! The correct asnwer is ${calculatedAnswer[0]}`);
        incrementWrongScore();
    }

    runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands and operator
 * directly fro the dom, and returns the correct asnwer.
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
<<<<<<< HEAD
    } else {
        alert(`Unsupported operation '${operator}'`);
        throw `Unsupported operation '${operator}. Aborting!'`;
=======
    } else if (operator === "-") {
      return [operand1 - operand2, "subtraction"];
    } else if (operator === "x") {
      return [operand1 * operand2, "multiplication"];
    } else {
      alert(`Unsupported operation '${operator}'`);
      throw `Unsupported operation '${operator}. Aborting!'`;
>>>>>>> 3912fc3561b2bef5957563ca3056736546fb495d
    }
}

/**
 * Gets the current score from DOM  and increase 1
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * Gets the current tally of the incorrect answer from the DOM 
 * and increase 1
 */
function incrementWrongScore() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}
<<<<<<< HEAD
function displaySubtractQuestion() { }
function displayMultiplyQuestion() { }
=======
function displaySubtractQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "-";
}
function displayMultiplyQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "x";
}
>>>>>>> 3912fc3561b2bef5957563ca3056736546fb495d
