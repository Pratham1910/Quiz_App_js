const questions = [
    {
        question:"Which is the largest Animal in the world ?",
        answers:[
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Giraffe", correct: false},
            {text: "Elephant", correct: false}
        ]
    },
    {
        question:"Who is the PM of India ?",
        answers:[
            {text: "Narendra Modi", correct: true},
            {text: "Rahul Gandhi", correct: false},
            {text: "Manmohan sing", correct: false},
            {text: "Gandhi", correct: false}
        ]
    },
    {
        question:"Whis is the Seven Contenent among this ?",
        answers:[
            {text: "Asia", correct: true},
            {text: "Japan ", correct: false},
            {text: "USA", correct: false},
            {text: "Mirzapur", correct: false}
        ]
    }
];
console.log(`The all questions are:${questions[1].question}`);

let questionElement = document.querySelector('#question');
let answerButton = document.querySelector('#ansBtns');
let nextButton = document.querySelector('#next');


let currentQuestionIndex = 0;
let Score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    Score = 0 ;
    nextButton.innerHTML = 'Next';
    showQuestion();
};

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    console.log(`The Current Question is : ${JSON.stringify(currentQuestion.answers)}`);
    
    let questionIndex  = currentQuestionIndex + 1 ;
    console.log(`The question no is : ${questionIndex}`);    
    console.log(`The Current Question is : ${currentQuestion.question}`);
    questionElement.innerHTML = questionIndex + "." + currentQuestion.question;

    currentQuestion.answers.forEach((answer)=>{
        // console.log(answer);
        let button= document.createElement('button');
        let ans = button.innerHTML = answer.text;
        console.log(`This is the Answer we will be Printing :${ans}`);
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        };
        button.addEventListener('click',selectAnswer);
    });
};

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    };

};

function selectAnswer(e){
    const selectBtn = e.target;
    console.log(`This is the SelectAnswer: ${e.target}`);
    
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct")
        Score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    })
    nextButton.style.display ="block";
};

function showScore(){
    resetState();
    questionElement.innerHTML = `Your Score is ${Score} out of ${questions.length}`;
    nextButton.innerHTML = " Play Again ";
    nextButton.style.display = "block"
};

function handelNextButton(){
    currentQuestionIndex++;

    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    };
};

nextButton.addEventListener('click',function(){
    if(currentQuestionIndex < questions.length){
        handelNextButton();
    }else{
        startQuiz();
    };
});


startQuiz();



