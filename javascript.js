var startBtn = document.getElementById("start");
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");
var question = document.getElementById("question");
var timer = document.getElementById("timer");
var leaderBoard = document.getElementById("leaderBoard");
var currentQuestion = 0;
var timerCount = 120;
var scoreDisplay = document.getElementById("scoreDisplay");
var score = 0;

var questionArray = [
    {
        question : "HTML means?",
        a: "Hot Tomato Makeout Lane",
        b: "Hand Trenching Middle Lane",
        c: "Horse Time My Liege",
        d: "Hyper Text Markup Language",
        correct: "Hyper Text Markup Language"
    },
    
    {
        question : "What does CSS stand for then?",
        a: "Counter Strike Source",
        b: "Cascading Style Sheets",
        c: "Corn Sensation Special",
        d: "Creatine Super Strength",
        correct: "Cascading Style Sheets"
    },

    {
        question : "Javascript does mostly what?",
        a: "Makes your website look pretty",
        b: "Lays the boneworks for website layout",
        c: "Run APIs and functions for your webpage",
        d: "Minecraft",
        correct: "Run APIs and functions for your webpage"
    },

    {
        question : "Javascript was made by who?",
        a: "Brendan Eich",
        b: "Bill Gates",
        c: "Steve Jobs",
        d: "Graydon Scates",
        correct: "Brendan Eich"
    },

    {
        question : "Which of the following is an actual 3rd party API for Javascript?",
        a: "Source",
        b: "Unreal Engine 5",
        c: "CSS",
        d: "jQuery",
        correct: "jQuery"
    },
    
    {
        question : "Javascript can be coded in what type of file?",
        a: ".swaws",
        b: ".js",
        c: ".css",
        d: ".mp3",
        correct: ".js"
    }
];

function displayQuestion() {
    var questionData = questionArray[currentQuestion];
    question.innerText = questionData.question;
    answerA.innerText = questionData.a;
    answerB.innerText = questionData.b;
    answerC.innerText = questionData.c;
    answerD.innerText = questionData.d;
    scoreDisplay.innerText = score;
};



function questionTime() {
    console.log("quiz begins");
    countdown = setInterval(timerFunction, 1000)
    /*startBtn.classList.add("hide");
    userChoices.classList.remove("hide");*/
    displayQuestion();
    
};

/*function compare() {
    if userSelection.innertext === questionData.correct;
    window.alert("Correct!");
}*/
function timerFunction(){
    timerCount--;
    timer.innerText = timerCount;
    if (timerCount <= 0){
        endQuiz();
    }
}

function timerCheck() {
    if (timerCount <= 0) {
        clearInterval(timer);
        endQuiz();
    }
}

function compare(event) {
    if(event.target.innerText === questionArray[currentQuestion].correct) { 
      timer.innerText = timerCount;
      score++;
      console.log("Correct");
    }
    if(event.target.innerText !== questionArray[currentQuestion].correct){
        timerCount= timerCount - 20;
        timer.innerText = timerCount;
        console.log("Incorrect");
    }
    currentQuestion++;
    timerCheck();
    if(currentQuestion < questionArray.length) displayQuestion();
    else endQuiz();

}  

function endQuiz() {
    clearInterval(countdown)
    clearInterval(timerCount)
    var initials = prompt("Please put in your name.");
    if (initials != null) {
    
    initials += "'s score = ";
    initials += score;
    leaderBoard.innerHTML = initials;
    }
    
}
startBtn.addEventListener("click", questionTime);



