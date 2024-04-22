const questions = [
    {
        question: "What country has the highest life expectancy?",
        answers :[
            {text: "hong Kong" ,correct:true},
            {text: "india",correct:false},
            {text: "china",correct:false},
            {text: "pakistan",correct:false},

        ]
    },
    {
        question: "Which language has the more native speakers?",
        answers :[
            {text: "English",correct:false},
            {text: "Hindi",correct:false},
            {text: "spanish" ,correct:true},

            {text: "Urdu",correct:false},


        ]
    },
    {
        question: "Which planet in the Milky Way is the hottest?",
        answers :[
            {text: "mars",correct:false},
            {text: "venus" ,correct:true},

            {text: "mercury",correct:false},
            {text: " jupiter",correct:false},


        ]
    },
    {
        question: "What country has won the most World Cups?",
        answers :[
            {text: "brazil" ,correct:true},
            {text: "China",correct:false},
            {text: "India",correct:false},
            {text: "Australia",correct:false},


        ]
    },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const  nextButton = document.getElementById("next-btn");
let currentQuestionIndex =0;
let score = 0;
 function startQuiz(){
    currentQuestionIndex =0;
      score = 0;
      nextButton.innerHTML ="Next"
      showQuestion();

 };


 function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
button.addEventListener("click", selectAnswer);
    });


}

function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    };
};
 function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
            selectedBtn.classList.add("inCorrect");
        }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    });
nextButton.style.display = "block";
};
function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "playAgain";
    nextButton.style = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
else{
    startQuiz();
}

});
startQuiz();