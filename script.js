let currentState = 0;

const questions = [
    {
        question: "You are in a dark forest. Do you go left or right?",
        answers: [
            { text: "Left", nextState: 1 },
            { text: "Right", nextState: 2 }
        ]
    },
    {
        question: "You find a cave. Do you enter or stay outside?",
        answers: [
            { text: "Enter", nextState: 3 },
            { text: "Stay Outside", nextState: 4 }
        ]
    },
    {
        question: "You arrive at a spooky clearing. Do you proceed?",
        answers: [
            { text: "Yes", nextState: 5 },
            { text: "No", nextState: 6 }
        ]
    }
];

function renderQuestion() {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    questionElement.innerText = questions[currentState].question;
    answersElement.innerHTML = '';  // Clear old buttons

    questions[currentState].answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.addEventListener('click', () => {
            currentState = answer.nextState;
            renderQuestion();
        });
        answersElement.appendChild(button);
    });
}

// Initialize the first question
renderQuestion();
