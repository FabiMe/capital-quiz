
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

let currentQuestionIndex = 0; // Index of the current question being displayed

// Function to load a new question and choices
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    const randomQuestion = document.getElementById("random-question");
    randomQuestion.textContent = currentQuestion.question;

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

// Variable to store the score
let score = 0;

// Variable to store the selected answer
let selectedAnswer = null;

// Function to handle the click event on answer choice buttons
function handleAnswerClick(event) {
    const currentQuestion = quizData[currentQuestionIndex];
    const selectedAnswer = event.target.innerText;
    // Check if the selected answer is correct
    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
    }
    // Move to the next question
    currentQuestionIndex++;

    // Check if there are more questions, else show the score section
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showScoreSection();
    }
}

// Function to show the score section
function showScoreSection() {
    // Get a reference to the "Score" button
    const scoreBtn = document.getElementById("score-btn");

    // Show the score section and hide all other sections
    scoreSection.classList.remove("hide");
    scoreSection.classList.add("show");
    hideAllSectionsExcept(scoreSection);

    // Display the final score
    const scoreText = document.createElement("p");
    scoreText.textContent = `Your score: ${score} out of ${quizData.length}`;
    scoreSection.appendChild(scoreText);

    // Add an event listener to the "Restart" button
    const restartBtn = document.getElementById("restart-btn");
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
        scoreText.textContent = "";
    });
}

// Add click event listeners to the answer choice buttons
const choice1Btn = document.getElementById("choice1");
const choice2Btn = document.getElementById("choice2");
const choice3Btn = document.getElementById("choice3");
const choice4Btn = document.getElementById("choice4");

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

    // Load the first question
    loadQuestion();
});

