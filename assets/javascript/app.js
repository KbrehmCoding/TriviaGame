function showResults(){}
(function() {
    function buildQuiz() {

        const output = [];

        myQuestions.forEach((currentQuestion, questionNumber) => {

        const answers = [];

        for (letter in currentQuestion.answers) {
            answers.push(
            `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
            </label>`
            );
        }

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>`
        );
        });

        quizContainer.innerHTML = output.join("");
    }

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

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
        {
        question: "Which Jane Austen Novel had a charcter named Mr. Darcy?",
        answers: {
        a. "Sense and Sensibility",
        b. "Emma",
        c. "Pride and Prejidice",
        d. "Persusion",
        },
        correct answer: "c"
    },
    {
        question: "Mark Twains real name was?",
        answers: {
        a. "Adam Clark",
        b. "John Birch",
        c. "Samuel Clemins",
        d. "Andrew Roberts",
        },
        correct answer : "c"
    },
    {

        question: "What was Stephen Kings first published novel?",
        answers: {
        a. "Carrie",
        b. "I.T.",
        c. "The Green Mile",
        d. "Under The Dome",
        },
        correct answer : "a"
    },
    {

    question: "In The Percy Jackson and the Olypians, Percy was the son of which Greek God?",
        answers:{
        a. "Posidon",
        b. "Zeus",
        c. "Hermes",
        d. "Aries",
        },
        correct answer: "a"
    },
    {

        question: "H.G. Wells wrote primarily in what genre?",
        answers: {
        a. "Fantasy",
        b. "Horror",
        c. "Science Ficion",
        d. "Mystery",
        },
        correct answer: "c"
    },
    {

        question: "Which of Shakespears plays has a fairy named Puck?",
        answers: {
        a. "The Tempest",
        b. "Romeo and Juliet",
        c. "Othello",
        d. "A Midsummer Nights Dream",
        },
        correct answer: "d"
    },
    {

        question: "Beatrix Potter wrote and illustrated what popular childrens books?"
        a. "The Tales of Peter Rabbit",
        b. "Whinnie The Pooh",
        c. "If You Give a Mouse a Cookie",
        d. "The Veleteen Rabbit",
        },
        correct answer: "a"
    },
    },
    {

        question: "Nathaniel Hawthorne wrote this novel?"
        a. "The Grapes of Wrath",
        b. "The Great Gatsby",
        c. "The Scarlett Letter",
        d. "Moby Dick",
        },
        correct answer: "c"
    },

    ];

    buildQuiz();

    submitButton.addEventListener("click", showResults);
})();
