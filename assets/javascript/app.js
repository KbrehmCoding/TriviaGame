const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
let intervalId;

const myQuestions = [
    {
        question: "Which Jane Austen Novel had a charcter named Mr. Darcy?",
        answers: {
            a: "Sense and Sensibility",
            b: "Emma",
            c: "Pride and Prejudice",
            d: "Persusion",
        },
        correctAnswer: "c"
    },
    {
        question: "Mark Twains real name was?",
        answers: {
            a: "Adam Clark",
            b: "John Birch",
            c: "Samuel Clemins",
            d: "Andrew Roberts",
        },
        correctAnswer: "c"
    },
    {
        question: "What was Stephen King's first published novel?",
        answers: {
            a: "Carrie",
            b: "I.T.",
            c: "The Green Mile",
            d: "Under The Dome",
        },
        correctAnswer: "a"
    },
    {
        question: "In The Percy Jackson and the Olypians, Percy was the son of which Greek God?",
        answers: {
            a: "Posidon",
            b: "Zeus",
            c: "Hermes",
            d: "Aries",
        },
        correctAnswer: "a"
    },
    {
        question: "H.G. Wells wrote primarily in what genre?",
        answers: {
            a: "Fantasy",
            b: "Horror",
            c: "Science Ficion",
            d: "Mystery",
        },
        correctAnswer: "c"
    },
    {
        question: "Which of Shakespear's plays has a fairy named Puck?",
        answers: {
            a: "The Tempest",
            b: "Romeo and Juliet",
            c: "Othello",
            d: "A Midsummer Nights Dream",
        },
        correctAnswer: "d"
    },
    {
        question: "Beatrix Potter wrote and illustrated what popular childrens' books?",
        answers: {
            a: "The Tales of Peter Rabbit",
            b: "Whinnie The Pooh",
            c: "If You Give a Mouse a Cookie",
            d: "The Veleteen Rabbit",
        },
        correctAnswer: "a"
    },
    {
        question: "Nathaniel Hawthorne wrote this novel?",
        answers: {
            a: "The Grapes of Wrath",
            b: "The Great Gatsby",
            c: "The Scarlett Letter",
            d: "Moby Dick",
        },
        correctAnswer: "c"
    },
];

function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.answers) {
            answers.push(`
                <label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} : ${currentQuestion.answers[letter]}
                </label>
            `);
        }

        output.push(`
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
        `);
    });

    quizContainer.innerHTML = output.join("");
}

// shows a numerical value for how many were correct
// changes the color of text based on which ones are right or wrong
function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");
    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = "lightgreen";
        } else {
            answerContainers[questionNumber].style.color = "red";
        }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

function startTimer(duration, display) {
    let timer = duration;
    intervalId = setInterval(function () {
        let minutes = parseInt(timer / 60, 10)
        let seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = `${minutes}:${seconds}`;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(intervalId);
}

window.onload = function () {
    const timerDuration = 60 * 3, // three minutes
        display = document.querySelector('#time');
    startTimer(timerDuration, display);
    buildQuiz();
    submitButton.addEventListener("click", () => {
        stopTimer();
        showResults();
    });
};
