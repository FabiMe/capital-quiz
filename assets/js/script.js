
// Get references to the sections that need to be shown/hidden
const introSection = document.getElementById("intro");
const gameSection = document.getElementById("game");
const scoreSection = document.getElementById("score");

// Function to hide all sections except the provided activeSection
function hideAllSectionsExcept(activeSection) {
    const allSections = [introSection, gameSection, scoreSection];
    allSections.forEach(section => {
        if (section !== activeSection) {
            section.classList.add("hide");
            section.classList.remove("show");
        }
    });
}

// Get references to the answer choice buttons
const choice1Btn = document.getElementById("choice1");
const choice2Btn = document.getElementById("choice2");
const choice3Btn = document.getElementById("choice3");
const choice4Btn = document.getElementById("choice4");

// Variable to store the selected answer
let selectedAnswer = null;

// Function to handle the click event on answer choice buttons
function handleAnswerClick(event) {
    selectedAnswer = event.target.innerText; // Store the clicked answer in the variable
    // Do something with the selected answer, e.g., store it for later use or process it immediately
    console.log("Selected Answer:", selectedAnswer);
}

// Add click event listeners to the answer choice buttons
choice1Btn.addEventListener("click", handleAnswerClick);
choice2Btn.addEventListener("click", handleAnswerClick);
choice3Btn.addEventListener("click", handleAnswerClick);
choice4Btn.addEventListener("click", handleAnswerClick);

// Get a reference to the "Start Game" button
const startBtn = document.getElementById("start-btn");

// Add an event listener to the "Start Game" button
startBtn.addEventListener("click", function () {
    // Show the game section and hide all other sections
    gameSection.classList.remove("hide");
    gameSection.classList.add("show");
    hideAllSectionsExcept(gameSection);
});