// Get references to the sections that need to be shown/hidden
const introSection = document.getElementById("intro");
const gameSection = document.getElementById("game");
const scoreSection = document.getElementById("score");

// Get a reference to the "player-name"
const playerNameInput = document.getElementById("player-name");

// Get a reference to the Game buttons
const startBtn = document.getElementById("start-btn");
const scoreBtn = document.getElementById("score-btn");
const restartBtn = document.getElementById("restart-btn");

// Define an object to store selected answers for each question
const selectedAnswers = {};

// Quiz questions and answers
const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the capital of Netherlands?",
        choices: ["Berlin", "Amsterdam", "Tirana", "Brussels"],
        correctAnswer: "Amsterdam"
    },
    {
        question: "What is the capital of Ireland?",
        choices: ["Sofia", "Budapest", "Dublin", "Rome"],
        correctAnswer: "Dublin"
    },
    {
        question: "What is the capital of Iceland?",
        choices: ["Reykjavik", "Luxembourg", "Warsaw", "Stockholm"],
        correctAnswer: "Reykjavik"
    },
    {
        question: "What is the capital of Ukraine?",
        choices: ["London", "Kiev", "Lisbon", "Oslo"],
        correctAnswer: "Kiev"
    },
    {
        question: "What is the capital of Slovenia?",
        choices: ["Bern", "Bratislava", "Bucharest", "Ljubljana"],
        correctAnswer: "Ljubljana"
    }
];

// Index of the current question being displayed
let currentQuestionIndex = 0;

// Variable to store the score
let score = 0;

// Variable to store the selected answer
let selectedAnswer = null;

// Declare a variable to store the player name globally
let playerName = "";

// Add a flag to control button activation
let buttonsDisabled = false;

// Add event listeners to the answer choice buttons
const choice1Btn = document.getElementById("choice1");
const choice2Btn = document.getElementById("choice2");
const choice3Btn = document.getElementById("choice3");
const choice4Btn = document.getElementById("choice4");

choice1Btn.addEventListener("click", handleAnswerClick);
choice2Btn.addEventListener("click", handleAnswerClick);
choice3Btn.addEventListener("click", handleAnswerClick);
choice4Btn.addEventListener("click", handleAnswerClick);

// Add event listener to the "Start Game" button
startBtn.addEventListener("click", handleStartGameClick);

// Add event listener to the "Score" button
scoreBtn.addEventListener("click", handleScoreButtonClick);

// Add event listener to the "Restart" button
restartBtn.addEventListener("click", function () {
    // Reset the quiz
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();

    // Show the game section and hide all other sections
    gameSection.classList.remove("hide");
    gameSection.classList.add("show");
    hideAllSectionsExcept(gameSection);

    // Clear the previous score text
    const playerNameDisplay = document.getElementById("player-name-display");
    if (playerNameDisplay) {
        playerNameDisplay.textContent = "";
    }
});

// Hide all sections except the intro section initially
hideAllSectionsExcept(introSection);

/**
 * Function to handle the click event on the "Start Game" button
 */
function handleStartGameClick() {
    // Get the player's name from the input field
    playerName = playerNameInput.value;

    if (playerName.trim() !== "") {
        gameSection.classList.remove("hide");
        gameSection.classList.add("show");
        hideAllSectionsExcept(gameSection);

        // Load the first question
        loadQuestion();
    } else {
        // Display an error message if the player name is empty
        alert("Please enter your name before starting the game.");
    }
}
/**
 * Function to handle the click event on the "Score" button
 */
function handleScoreButtonClick() {
    // Check if the player name is not empty before proceeding
    if (playerName.trim() !== "") {
        // Show the score section and hide all other sections
        scoreSection.classList.remove("hide");
        scoreSection.classList.add("show");
        hideAllSectionsExcept(scoreSection);

        // Display the player's name along with the final score
        const playerNameDisplay = document.createElement("p");
        playerNameDisplay.textContent = `Congratulations ${playerName || "N/A"}`;
        scoreSection.appendChild(playerNameDisplay);

        // Display the final score
        const scoreText = document.createElement("p");
        const finalScore = calculateFinalScore(); // Implement the logic to calculate the final score
        scoreText.textContent = `You made ${finalScore} right answers out of ${quizData.length} questions.☺`;
        scoreSection.appendChild(scoreText);
    }
}
/**
 * Function to handle the click event on answer choice buttons
 * @param {MouseEvent} click on mouse 
 */
function handleAnswerClick(event) {
    // Disable all buttons while showing feedback
    if (buttonsDisabled) {
        return;
    }

    buttonsDisabled = true; // Disable buttons
    const currentQuestion = quizData[currentQuestionIndex];
    selectedAnswer = event.target.innerText;

    // Check if the selected answer is correct
    if (selectedAnswer === currentQuestion.correctAnswer) {
        // Apply correct answer style
        event.target.classList.add("correct");
        score++; // Increase the score for the correct answer
    } else {
        // Apply wrong answer style
        event.target.classList.add("wrong");
    }

    setTimeout(function () {
        event.target.classList.remove("correct", "wrong"); // Remove the styles
        currentQuestionIndex++; // Move to the next question

        // Check if there are more questions, else show the score section
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            handleScoreButtonClick(); // Show the score section after the last question
        }

        buttonsDisabled = false; // Enable buttons again
    }, 1000); // 1000 milliseconds = 1 second
}
/**
 * Function to hide all sections except the provided activeSection
 */
function hideAllSectionsExcept(activeSection) {
    const allSections = [introSection, gameSection, scoreSection];
    allSections.forEach(section => {
        if (section !== activeSection) {
            section.classList.add("hide");
            section.classList.remove("show");
        }
    });
}
/** 
 * Function to load a new question and choices
*/
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    const questionDisplay = document.getElementById("displayed-question");
    questionDisplay.textContent = currentQuestion.question;

    // Get references to the answer choice buttons
    const choice1Btn = document.getElementById("choice1");
    const choice2Btn = document.getElementById("choice2");
    const choice3Btn = document.getElementById("choice3");
    const choice4Btn = document.getElementById("choice4");

    // Set the text for each answer choice button
    choice1Btn.textContent = currentQuestion.choices[0];
    choice2Btn.textContent = currentQuestion.choices[1];
    choice3Btn.textContent = currentQuestion.choices[2];
    choice4Btn.textContent = currentQuestion.choices[3];
}
/**
 * Function to count correct answers
 * @returns score of the correct answers
 */
function calculateFinalScore() {
    let correctAnswers = 0;

    // Loop through the quizData and count the correct answers
    for (const question of quizData) {
        if (question.correctAnswer === selectedAnswers[question.question]) {
            correctAnswers++;
        }
    }
    return score;
}