//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

//Global variables
let randomNumber;
let attempts = 0;
let wins = 0;
let losses = 0;

initializeGame();

function initializeGame() {
    let guessBtn = document.querySelector("#guessBtn");
    guessBtn.style.display = "block";
    randomNumber = Math.floor(Math.random() * 99) + 1;
    console.log("randomNumber: " + randomNumber);

     //hiding the Reset button
    document.querySelector("#resetBtn").style.display = "none";
  
     //adding focus to textbox
    document.querySelector("#playerGuess").focus();

    let playerGuess = document.querySelector("#playerGuess");
    playerGuess.focus();
    playerGuess.value = "";

    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";

    document.querySelector("#guesses").textContent = "";
    attempts = 0;
    document.querySelector("#attempts").textContent = 7;

    document.querySelector("#wins").textContent = wins;
    document.querySelector("#losses").textContent = losses;
    
}

function checkGuess(){
    let feedback = document.querySelector("#feedback")
    feedback.textContent = "";
    let guess = document.querySelector("#playerGuess").value;
    console.log("Player guess: "+ guess);
    if(guess < 1||guess >99){
        feedback.textContent = "Enter a number between 0 and 99";
        feedback.style.color = "red";
        return;
    }

    attempts++;
    console.log("Attempts:" + attempts);
    feedback.style.color = "orange";
    if(guess == randomNumber){
        feedback.textContent = "You win!";
        feedback.style.color = "darkgreen";
        wins++;
        gameOver();
    }
    else{
        document.querySelector("#guesses").textContent += guess + " ";
        document.querySelector("#attempts").textContent = 7 - attempts;
        if(attempts == 7){
            feedback.textContent = "You lose!";
            feedback.style.color = "red";
            losses++;
            gameOver();
        }
        else if(guess > randomNumber){
            feedback.textContent = "Guess was high";
        }
        else{
            feedback.textContent = "Guess was low";
        }
    }
}

function gameOver(){
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");
    guessBtn.style.display = "none";
    resetBtn.style.display = "block";
}