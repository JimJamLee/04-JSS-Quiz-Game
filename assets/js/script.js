var startButton = document.getElementById('start-btn');
var scoresButton = document.getElementById('score-btn');
var gameHeader = document.getElementById('game-header');
var quizContent = document.getElementById('question-container');
var timerElement = document.getElementById('timer');
var question = document.getElementById('question');
var choiceA = document.getElementById('A');
var choiceB = document.getElementById('B');
var choiceC = document.getElementById('C');
var choiceD = document.getElementById('D');

let questions = [
    {
        question: 'What does JS stand for?',
        choiceA: 'JavaScript',
        choiceB: 'JavaScope',
        choiceC: 'JocaScript',
        choiceD: 'JamaSkip',
        correct: 'A'
    },{
        question: 'Wich of the following is NOT considered a JS data type?',
        choiceA: 'Number',
        choiceB: 'Mean',
        choiceC: 'Boolean',
        choiceD: 'String',
        correct: 'B'
    },{
        question: 'What arithmetic task does the % (modulo) operator perform?',
        choiceA: 'Adds',
        choiceB: 'Subtracts',
        choiceC: 'Returns a remainder',
        choiceD: 'Divides',
        correct: 'C'
    },{
        question: 'What will print from the following: console.log("Hello" + "World")?',
        choiceA: 'Hello+World',
        choiceB: 'Hello World',
        choiceC: 'Hello + World',
        choiceD: 'HelloWorld',
        correct: 'D'
    },{
        question: 'What will print from the following: console.log("Teaching the world how to code".length)?',
        choiceA: '30',
        choiceB: '6',
        choiceC: '12',
        choiceD: '24',
        correct: 'A'
    },{
        question: 'What does Math.floor() do?',
        choiceA: 'Generates a number between 0 and 1',
        choiceB: 'Rounds a number down to the nearest integer',
        choiceC: 'Generates a number between 0 and 10',
        choiceD: 'Rounds a number up to the nearest integer',
        correct: 'B'
    },{
        question: 'What is the difference between const and let variables?',
        choiceA: 'Let variables cannot be reassigned',
        choiceB: 'Const variables can be reassigned',
        choiceC: 'Let variables can be reassigned',
        choiceD: 'Nothing they are the same',
        correct: 'C'
    },{
        question: 'Given the following var x = "10", what kind of data type would typeof operator return for x?',
        choiceA: 'Mean',
        choiceB: 'Number',
        choiceC: 'Boolean',
        choiceD: 'String',
        correct: 'D'
    },{
        question: 'Why should the JS tag be come at the end of your HTML document?',
        choiceA: 'The JavaScript code may involve HTML elements that are not actually be available for it to affect yet',
        choiceB: 'It causes the pages to load slower otherwise',
        choiceC: 'They do not need to come at the end, they can be set in the beginning just like css',
        choiceD: 'It is an outdated practice that no longer applies',
        correct: 'A'
    },{
        question: 'Given the following var x = 10, what kind of data type would typeof operator return for x?',
        choiceA: 'Mean',
        choiceB: 'Number',
        choiceC: 'Boolean',
        choiceD: 'String',
        correct: 'B'
    }
];

var lastQuestion = questions.length - 1;
var runningQuestion = 0;

function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

startButton.addEventListener('click', startGame);

function startGame() {
    startButton.classList.add('hide');
    scoresButton.classList.add('hide');
    gameHeader.classList.add('hide');
    quizContent.classList.remove('hide');
    timerCount = 100;
    renderQuestion();
    startTimer();
}

var timer;
var timerCount;

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
            gameOver();
        }
    }, 1000)
}

function gameOver() {
    return window.location.assign('./assets/html/game-over.html')
}

function checkAnswer(answer) {
    if(answer == questions[runningQuestion].correct) {
        alert('CORRECT!')
    }else {
        alert('INCORRECT 10 SECOND PENALTY');
        timerCount -= 10;
    }
    if (timerCount <= 0) {
        clearInterval(timer);
        gameOver();
    }
    if(runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    }else {
        clearInterval(timer);
        goodGame();
    }
}

function goodGame() {
    var score = timerCount;
    console.log(score)
    localStorage.setItem('mostRecentScore', score);
    return window.location.assign('./assets/html/good-game.html');
}