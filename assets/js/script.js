document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked sumbit!");
            } else{
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

/**
 * Tha main game 'loop', called when the script is first loaded 
 * and after the user's answrr has been processed
 */
function runGame(){
    //Generate two numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}
function checkAnswer(){}
function calculateCorrectAnswer(){}
function incrementScore(){}
function incrementWrongScore(){}
function displayAdditionQuestion(){}
function displaySubtractQuestion(){}
function displayMultiplyQuestion(){}