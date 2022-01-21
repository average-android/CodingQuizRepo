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
var scoreDisplay = 0;
var score = 0;

var questionArray = [
    {
        question : "Does this work?",
        a: "No",
        b: "No",
        c: "Maybe",
        d: "Yes",
        correct: "Maybe"
    },
    
    {
        question : "Does this also work?",
        a: "Probably not",
        b: "Maybe",
        c: "If you did more work, yeah.",
        d: "No.",
        correct: "If you did more work, yeah."
    },

    {
        question : "Does this third question work perhaps?",
        a: "No",
        b: "Nope.avi",
        c: "Yes",
        d: "Never",
        correct: "Never"
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
    }
    if(event.target.innerText !== questionArray[currentQuestion].correct){
        timerCount= timerCount - 5;
        timer.innerText = timerCount;
    }
    currentQuestion++;
    if(currentQuestion < questionArray.length) displayQuestion();
    else endQuiz();

}  

function endquiz() {

}
startBtn.addEventListener("click", questionTime);



